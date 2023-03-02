import Router from "express";
import { MembershipShop } from "../models/membershipShopModel.js";
import { Membership } from "../models/membershipModel.js";
import { User } from "../models/userModel.js";
const router = Router();

router.post("/get_level", async (req, res) => {
	const {company_id,user_id} = req.body
	try {
		  const result = await MembershipShop.findOne({user_id : user_id ,company_id : company_id})
		  if(result) {
 		  	 const membership = await Membership.findById(result.membership_id)
	    	 if(membership){
	    	 	return res.send({ result: "success",data : membership.level})
	    	 }

		  }else{
	    		return res.send({ result: "success",data : 0})
		  }
	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}
})
router.post("/confirm_membership", async (req, res) => {
	const {company_id,address} = req.body
	try {
		  const result = await MembershipShop.findOne({user_id : address ,company_id : company_id})
		  if(result) {
 		  	 	return res.send({ result: "success"})
	    	 }
		  else{
 		  	 	return res.send({ result: "failed"})
		  }
	}
	catch(err){
		console.log(err)
	    return res.send({ result: "failed"})
	}
})
export default router;