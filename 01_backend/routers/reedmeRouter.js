import Router from "express";
import { ReedMe } from "../models/reedmeModel.js";
import {getBalance,getSecrectKey,transferToken} from './Lib/algorand.js'
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { Discount } from "../models/discountModel.js";
const router = Router();
const getBusiness = async (address) =>{
  const user = await User.findOne({algo_address:address})
  if(user){
	  const business_id =  user.employeer
	  const business = User.findById(business_id)
	  if(business){
	  	return business.algo_address
	  } 
	  else return ''
  }
  else 
  	return ''
}
router.post('/confirm_code', async(req,res) => {

	try{

		const {code} = req.body 
		 
 		jwt.verify(code, process.env['JWT_EMAIL_VERIFY_SECRET'], async (error, decoded) => {
			if(!decoded) {
	    			return res.send({ result: "failed"})
			}
			const result = await ReedMe.findById(decoded.recID)
			if(result){

				const date_d = new Date();
				let day = date_d.getDate();
				let month = date_d.getMonth() + 1;
				let year = date_d.getFullYear();
	  
			   // This arrangement can be altered based on how we want the date's format to appear.
				 let date = `${month}/${day}/${year}`;
				result.confirm_date = date;
				await result.save()

				return res.send({ result: "success"})	

			}else{
				return res.send({ result: "failed"})

			}
		})

	}
	catch(err){

		console.log(err)
	    return res.send({ result: "failed"})

	}

})
async function convertAddr2User(address){
	const user =  await User.findOne({ algo_address: address })
	 
	if(!user ) 
   		return ''
   	else return user.firstName + ' ' + user.lastName
}
async function convertAddr2Business(address){
	const user =  await User.findOne({ algo_address: address })
	 
	if(!user ) 
   		return ''
   	else return user.company
}

async function getServiceName(company,level){
  const  rec = await Discount.findOne({company:company})
  if(!rec) {
  	if(level == 1){
    	return  '5 % offer'
    }
    else if(level == 2){
    	return  'Free Product'
    }
    else {
    	return "Blockreward NFT"
    }
  }
  else {
  	if(level == 1){
    	return  rec.discount_rate + ' % offer'
    }
    else if(level == 2){
    	return  'Free Product'
    }
    else {
    	return "Blockreward NFT"
    }
}
}
router.post("/download_data", async (req, res) => {

	try{

		const {address} = req.body 
		const users =  await User.findOne({ algo_address: address })
		if(!users ) 
	    		return res.send({ result: "failed"})

	    
		var result = []
	    const role = users.role	
	    if(role == 0){

	    	ReedMe.find({"confirm_date":{$exists:true, "$ne": ""}}, null, {sort: {_id: -1}}, async function (err, rows) {	
		    		for(var i = 0 ;i < rows.length ; i++ ){
					const user = await convertAddr2User(rows[i].user)
		    		const serviceName = await getServiceName(rows[i].business,rows[i].service)
		    		const business = await convertAddr2Business(rows[i].business) 	
		    			result.push({
		    				created_at : rows[i].confirm_date,
		    				user 	   : user,
		    				business   : business,
		    				service    : serviceName,
		    				price      : rows[i].BRT,
		    				code 	   : rows[i].discount_code     
		    			})
		    		}

	     			return res.send({result:'success',data:result})	
			});
	    }
	    else if(role == 1) {
			
		    ReedMe.find({business:address,confirm_date:{$exists:true, "$ne": ""}}, null, {sort: {_id: -1}}, async function (err, rows) {	
		    		for(var i = 0 ;i < rows.length ; i++ ){
					const e_user = await convertAddr2User(rows[i].user)
		    		const serviceName = await getServiceName(address,rows[i].service)
		    			
		    			result.push({
		    				created_at : rows[i].confirm_date,
		    				user 	   : e_user,
		    				service    : serviceName,
		    				price      : rows[i].BRT,
		    				code 	   : rows[i].discount_code     
		    			})
		    		}

	     			return res.send({result:'success',data:result})	
			});

	    }else if (role == 2){
	    	const business_d = await User.findById(users.employeer)
		    if(!business_d)
		    		return res.send({ result: "failed"})

		    ReedMe.find({business:business_d.algo_address,confirm_date:{$exists:true, "$ne": ""}}, null, {sort: {_id: -1}}, async function (err, rows) {	
		    		for(var i = 0 ;i < rows.length ; i++ ){
					const e_user = await convertAddr2User(rows[i].user)
		    		const serviceName = await getServiceName(business_d.algo_address,rows[i].service)
		    			
		    			result.push({
		    				created_at : rows[i].confirm_date,
		    				user 	   : e_user,
		    				service    : serviceName,
		    				price      : rows[i].BRT,
		    				code 	   : rows[i].discount_code     
		    			})
		    		}

	     			return res.send({result:'success',data:result})	
			});

	    }
	    else if(role == 3) 
	    {

		    ReedMe.find({user:address,confirm_date:{$exists:true, "$ne": ""}}, null, {sort: {_id: -1}}, async function (err, rows) {	
			 		
			 		let len = rows.length >= 5 ? 5 : rows.length
		    		for(var i = 0 ;i < len ; i++ ){
		    			const e_user = await convertAddr2Business(rows[i].business)
			    		const serviceName = await getServiceName(rows[i].business,rows[i].service)
						
		    			result.push({
		    				created_at : rows[i].confirm_date,
		    				user 	   : e_user,
		    				service    : serviceName,
		    				price      : rows[i].BRT,
		    				code 	   : rows[i].discount_code     
		    			})
		    		}

	     			return res.send({result:'success',data:result})	
																
			});
	    }
		 
	
	}catch(err){
		return res.send({ result: "failed"}) 		
	}

})
router.post("/get_code", async (req, res) => {
	try {
 		 const {address, service,company,value} = req.body

		 const date_d = new Date();
		  let day = date_d.getDate();
		  let month = date_d.getMonth() + 1;
		  let year = date_d.getFullYear();

		 // This arrangement can be altered based on how we want the date's format to appear.
		   let date = `${month}/${day}/${year}`;
	   
		  const users = await User.findOne({ algo_address: address })
		 if(!users) 
			 return res.send({ result: "failed"})
		 const confirm_date = ''
		 const business = company
		 var discount_code = ''
		 const BRT = value
		 const user = address
		 if(value > 0)
		 await transferToken(address,business,value,getSecrectKey(users.algo_sk))
		 const rec = new ReedMe({business,user,service,BRT,date,confirm_date,discount_code})
		 await rec.save()
		  discount_code = jwt.sign(
            {
                recID: rec._id
            },
            process.env["JWT_EMAIL_VERIFY_SECRET"]
        );
		rec.discount_code = discount_code;
		rec.save()
	    return res.send({ result: 'success'})
 	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}
})
router.post("/progress_data",async(req, res)=>{
const {address} = req.body;
	try{
		
		const users =  await User.findOne({ algo_address: address })
		if(!users ) 
	    		return res.send({ result: "failed"})
		if(users.role != 3){
			return res.send({result : 'failed',msg : 'Not Allowed'})
		}

		let today = new Date();

	   // This arrangement can be altered based on how we want the date's format to appear.

		ReedMe.find({confirm_date:{$eq : ""},user:address  }, null, {sort: {_id: -1}}, async function (err, rows) {	
			var result = []
			for(var i = 0 ;i < rows.length ; i++ ){
				 let date_d = new Date(rows[i].date)
				 let difference = today.getTime() - date_d.getTime();
				 let TotalDays = Math.floor(difference / (1000 * 3600 * 24));
				 if(TotalDays<=2){
				
					let code = rows[i].discount_code
					let level = rows[i].service
					let value = 0;
					const discount_data =  await Discount.findOne({company : rows[i].business})
					var rate = 5,product_offer = 40,NFT_offer = 15;
					if(discount_data){
						rate = discount_data.discount_rate;
						product_offer = discount_data.free_product_amount;
						NFT_offer = discount_data.blockreward_offer;
					}

					if(level == 1)
						value = rate * rows[i].BRT;
					else if(level == 2)
						value = product_offer
					else value = NFT_offer
			    	result.push({code : code , value : value }) 
				}
			
				}
			 return res.send({result : 'success', data : result})
	 });
				
	}catch(err){
		console.log(err)
		return res.send({result : 'failed'})
	}

})
export default router;