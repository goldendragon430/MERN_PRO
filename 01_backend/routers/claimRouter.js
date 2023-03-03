
import Router from "express";
import { ClaimCode } from "../models/claimModel.js";
import { User } from "../models/userModel.js";
import { Membership } from "../models/membershipModel.js";
import { MembershipShop } from "../models/membershipShopModel.js";
import {CreateArc19,cidToReserveURL,getSecrectKey} from './Lib/algorand.js'
const router = Router();

const generateRandomString = function(length=6){
return Math.random().toString(20).substr(2, length)
}
router.post('/new', async(req,res) => {

	try{
		const {address} = req.body;
		if(!address) 
			return res.send({result : 'failed'})

		const business_rec = await User.findOne({algo_address : address})
		if(!business_rec) 
	 		return res.send({result : 'failed'})

		if(business_rec.role != 1) 
				return res.send({result : 'failed',data : 'Not Allowed'})
		
		Membership.findOne({creator:address}, null, {sort: {level: 1}}, async function (err, mship) {	
			if(err){
				console.log(err)
				return res.send({result : 'failed'})
			}
			       const membership = mship._id
			       const code = generateRandomString(10).toUpperCase()
			       const business = address
			       const newRec = new ClaimCode({business,membership,code})
			       await newRec.save()
				   return res.send({result : 'success',data : code})
			});

	}catch(err){
		console.log(err)
		return res.send({result : 'failed'})
	}
	
})
router.post('/confirm', async(req,res) => {
try{
		const {address,code} = req.body;
		if(!address) 
			return res.send({result : 'failed'})
		const user = await User.findOne({algo_address : address})
		if(user.role < 2) 
				return res.send({result : 'failed'})

		const rec = await ClaimCode.findOne({code : code});
		if(!rec)
			return res.send({result : 'failed'})
		const membership_id = rec.membership
 		const membership_d = await Membership.findById(membership_id)
		if(!membership_d)
			return res.send({result:'failed'})
			
		const {url,reserveAddress} = cidToReserveURL(membership_d.picture.slice(21))
		await CreateArc19(address,membership_d.creator,membership_d.type,membership_d.unit_name,membership_d.description,url,reserveAddress,getSecrectKey(user.algo_sk)) 
		const code_rec = await ClaimCode.findOne({code : code})
		if(code_rec)
			await code_rec.remove()
		const company_id = membership_d.creator;
		const user_id = address
		const new_user =  new MembershipShop({
   	  		company_id,
   	  		membership_id,
   	  		user_id
	   	    })
   	    await new_user.save()

		return res.send({result : 'success'})

	}catch(err){
		console.log(err)
		return res.send({result : 'failed'})
	}
	 
})
export default router;