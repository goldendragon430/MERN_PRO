import Router from "express";
import { Membership } from "../models/membershipModel.js";
import { User } from "../models/userModel.js";
import {MembershipShop} from "../models/membershipShopModel.js"
import {CreateArc19,RemoveAsset,cidToReserveURL,transferToken,transferAlgo,transferUSDC,getSecrectKey} from './Lib/algorand.js'
import Stripe from 'stripe';
import { transferETH, transferUSDT } from "./Lib/ethereum.js";

const router = Router();
router.post('/remove',async(req,res)=>{
	const {address,unit_name} = req.body
	const rec = await User.findOne({algo_address:address})
 	RemoveAsset(address,getSecrectKey(rec.algo_sk),unit_name)	
 	res.send({result : 'success'})
})
router.post("/get", async (req, res) => {
	const {id,type} = req.body
	try {
		if(type == ''){

 		  if(id == '')
			{
				Membership.find({platform_nft:'0'}, null, {sort: {level: 1}}, function (err, mships) {	
						     return res.send({ result: mships})   
						});

			} 
			else	
				{
					const user = await User.findById(id)
					if(!user) return res.send({ result: []})
					Membership.find({creator : user.algo_address}, null, {sort: {level: 1}}, function (err, mships) {	
							return res.send({ result: mships})   
							});
				}
		}
		else{
			if(id == '') {
				const users = await User.find({businessType:type},{algo_address:1})
				var result = []
				for(var i = 0 ; i < users.length ; i++ ){
					 	const memberships =  await Membership.find({creator : users[i].algo_address}, null, {sort: {level: 1}})
					 	result = result.concat(memberships)
						if (i == users.length - 1)
						return res.send({result : result})
				}
				if(users.length == 0)
					 return res.send({result : []})
				

			}
			else{

				  const user = await User.findById(id)
				  if(!user) return res.send({ result: []})
				  if(user.businessType != type) 
					return res.send({ result: []})
				  Membership.find({creator : user.algo_address}, null, {sort: {level: 1}}, function (err, mships) {	
							return res.send({ result: mships})   
							});

			}


		}

	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}
})
router.post("/get_blockreward_nft", async (req, res) => {
	try {
			Membership.find({platform_nft:'1'}, null, {sort: {level: 1}}, function (err, mships) {	
			     return res.send({ result: mships})   
			});

	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}
})
async function  Mint(address,membership,currency){
	    
		const user = await User.findOne({algo_address:address})
		const membership_d = await Membership.findById(membership)
	 

		const to = membership_d.creator
		const receiver = await User.findOne({algo_address:to})
		 

		if(currency == "algo"){
		 const price =	membership_d.algo;
		 await transferAlgo(address,to,price,getSecrectKey(user.algo_sk) )
		}
		else if(currency == 'usdc') {
		 const price =	membership_d.usdc;
		 await transferUSDC(address,to,price,getSecrectKey(user.algo_sk))
		}
		else if (currency == 'eth'){
		 
		   await transferETH(user.eth_address,user.eth_data,receiver.eth_address,membership_d.eth)
		}
		else {
		   await transferUSDT(user.eth_address,user.eth_data,receiver.eth_address,membership_d.usdc)	
		}

		 console.log("creating nft")
		 const {url,reserveAddress} = cidToReserveURL(membership_d.picture.slice(21))
		 await CreateArc19(address,membership_d.creator,membership_d.type,membership_d.unit_name,membership_d.description,url,reserveAddress,getSecrectKey(user.algo_sk)) 
		
	  	const company_id = membership_d.creator;
	  	const membership_id = membership;
	  	const user_id  =  address 
		const isExist =  await MembershipShop.findOne({user_id : address,company_id : company_id})
	  	if(!isExist) {
		  	const user =  new MembershipShop({
   	  		company_id,
   	  		membership_id,
   	  		user_id
	   	    })
	   	    await user.save()
	  	}
	  	else{
	  		isExist.membership_id = membership_id
	  		await isExist.save()
	  	}
	 	
}
router.post("/buy", async (req, res) => {
	const {address,membership,currency} = req.body
	
	// const user = await User.findOne({algo_address:address})
	// const membership_d = await Membership.findById(membership)
	// await RemoveAsset(address,getSecrectKey(user.algo_sk),'mship',membership_d.creator)
	// return;
	try{
		await Mint(address,membership,currency)
		return res.send({ result: "success"})
	}
	catch(err){
		 console.log(err)
		 return res.send({ result: "failed"})
	}
})
router.post("/buy_card", async (req, res) => {
	const {address,membership} = req.body
	try{

		const user = await User.findOne({algo_address:address})
		const membership_d = await Membership.findById(membership)
		
	
		const {url,reserveAddress} = cidToReserveURL(membership_d.picture.slice(21))
		await CreateArc19(address,membership_d.creator,membership_d.type,membership_d.unit_name,membership_d.description,url,reserveAddress,getSecrectKey(user.algo_sk)) 

	  	const company_id = membership_d.creator;
	  	const membership_id = membership;
	  	const user_id  =  address 
		const isExist =  await MembershipShop.findOne({user_id : address,company_id : company_id})
	  	if(!isExist) {
		  	const user =  new MembershipShop({
   	  		company_id,
   	  		membership_id,
   	  		user_id
	   	    })
	   	    await user.save()
	  	}
	  	else{
	  		isExist.membership_id = membership_id
	  		await isExist.save()
	  	}

		return res.send({ result: "success"})
	}
	catch(err){
		 return res.send({ result: "failed"})
	}
})

router.post("/update_card", async (req, res) => {
	const {address,membership} = req.body
	try{

		const user = await User.findOne({algo_address:address})
		const membership_d = await Membership.findById(membership)
		const unit_name = "mship"
		
		await RemoveAsset(address,getSecrectKey(user.algo_sk),unit_name,membership_d.creator) 
		 
		const {url,reserveAddress} = cidToReserveURL(membership_d.picture.slice(21))
		await CreateArc19(address,membership_d.creator,membership_d.type,membership_d.unit_name,membership_d.description,url,reserveAddress,getSecrectKey(user.algo_sk)) 
		
	  	const company_id = membership_d.creator;
	  	const membership_id = membership;
	  	const user_id  =  address 
		const isExist =  await MembershipShop.findOne({user_id : address,company_id : company_id})
	  	if(!isExist) {
		  	const user =  new MembershipShop({
   	  		company_id,
   	  		membership_id,
   	  		user_id
	   	    })
	   	    await user.save()
	  	}
	  	else{
	  		isExist.membership_id = membership_id
	  		await isExist.save()
	  	}

		return res.send({ result: "success"})
	}
	catch(err){
		 return res.send({ result: "failed"})
	}
})

router.post("/get_company",async (req,res) =>{
	const  {membership,type} = req.body
	try{
		const rec = await Membership.findById(membership)
		if(rec) {
		  if(type == 'ALGO')
			  res.send({result:'success',data : rec.creator})
		  else{
			const user =  await  User.findOne({algo_address : rec.creator})
			if(user){
				res.send({result:'success',data : user.eth_address})
			}else{
				res.send({result : 'failed'})
			}
		  }
		}
		else{
			res.send({result:'failed'})
		}

	}catch(err){
		console.log(err)
		res.send({result:'failed'})
	}
})


const StripeFun = async (email,name,usdc,stripe_key) =>{
	const stripe = new Stripe(stripe_key);

	const session = await stripe.checkout.sessions.create({
    	line_items: [
	      {
	        price_data: {
	          currency: 'usd',
	          product_data: {
	            name: name,
	          },
	          unit_amount: parseFloat(usdc) * 100,
	        },
	        quantity: 1,
	      },
	    ],
	    customer_email :email ,
	    mode: 'payment',
	    success_url: process.env.FRONT_URL + '/stripe?confirm=true',
	    cancel_url : process.env.FRONT_URL + '/stripe?confirm=false',
  	
  	});
  	return session.url;

}
router.post("/stripe", async(req, res) =>{

	const {address,membership} = req.body
	try{
		
		const user = await User.findOne({algo_address:address})
		const membership_d = await Membership.findById(membership)
		if(!user || !membership_d) 
			return	res.send({result : 'failed'})
		
		const business = membership_d.creator
		const business_d = await User.findOne({algo_address:business})
		if(!business_d) return res.send({result : 'failed'})
		const stripe_key = business_d.businessKey
		const session_url = await StripeFun(user.email,membership_d.type,membership_d.usdc,stripe_key)

		res.send({result : 'success',url : session_url})

	}catch(err){
		console.log(err)
		res.send({result : 'failed'})
	}

})
router.post("/upgrade", async (req, res) => {

	const {address,membership,currency} = req.body
	const user = await User.findOne({algo_address:address})
	const membership_d = await Membership.findById(membership)
	const unit_name = "mship"
	try{

		await RemoveAsset(address,getSecrectKey(user.algo_sk),unit_name,membership_d.creator) 

		await Mint(address,membership,currency)		
	    return res.send({ result: "success"})
	
	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}

})

router.post("/get_top_level", async (req, res) => {

	try{
		Membership.find({}, null, {sort: {level: -1}}, function (err, mships) {	
		    if(mships.length == 0)
		    	return res.send({ result:"0"})
		    else	
		        return res.send({ result: mships[0].level})
		});
	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}

})

export default router;