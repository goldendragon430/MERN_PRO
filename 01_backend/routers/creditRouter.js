import Router from "express";
import { CreditCard } from "../models/stripModel.js";
import { User } from "../models/userModel.js";
 
const router = Router();
 
router.post("/new", async (req, res) => {
 const {firstname,lastname,address,cardnumber,expiredate,cvc,type} = req.body
 if(!address)
	return res.send({result : 'failed'})
 try{
 	 const user = await User.findOne({algo_address : address})
	 if(!user) return res.send({result : 'failed'})
		const user_id = user._id;
		const newRec = new CreditCard({
		 	user_id ,
		 	firstname,
		 	lastname,
		 	cardnumber,
		 	expiredate,
		 	cvc,
		 	type
		 })
		await newRec.save()
		return res.send({result : 'success'})

 }catch(err){
		console.log(err)
		return res.send({result : 'failed'})
 }

})
router.post("/update", async (req, res) => {
 const {id,firstname,lastname,address,cardnumber,expiredate,cvc,type} = req.body
 if(!id) 
	return res.send({result : 'failed'})
 try{

		const matchedCard = await CreditCard.findById(id)	
		if(!matchedCard) return res.send({result : 'failed'})
		
		matchedCard.firstname = firstname;
		matchedCard.lastname = lastname;
		matchedCard.cardnumber = cardnumber;
		matchedCard.expiredate = expiredate;
		matchedCard.cvc = cvc;
		matchedCard.type = type;

		await matchedCard.save()
		return res.send({result : 'success'})

 }catch(err){
		console.log(err)
		return res.send({result : 'failed'})
 }

})
router.post("/get_card_list", async (req, res) => {
 	const {address} = req.body
	if(!address)
		return res.send({result : 'failed'})
	try{

		 const user = await User.findOne({algo_address : address})
		 if(!user) return res.send({result : 'failed'})
			const user_id = user._id;
		 const cards = await CreditCard.find({user_id : user_id})  
		 return res.send({result : 'success',data : cards})

	}catch(err){
		 console.log(err)
		 return res.send({result : 'failed'})

	}

})

router.post("/get_card_info", async (req, res) => {
 const {id} = req.body
 try{

	 const card = await CreditCard.findById(id)  
	 return res.send({result : 'success',data : card})

 }catch(err){
 	console.log(err)
	return res.send({result : 'failed'})

 }

})

router.post("/remove", async (req, res) => {
 const {id} = req.body
 try{

	 const card = await CreditCard.findById(id)  
	 await card.remove()
	 return res.send({result : 'success'})

 }catch(err){
 	console.log(err)
	return res.send({result : 'failed'})

 }

})
export default router;