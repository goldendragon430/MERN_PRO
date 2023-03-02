import Router from "express";
import { TicketHistory } from "../models/ticketRedeemModel.js";
import { User } from "../models/userModel.js";
 
const router = Router();
 
router.post("/get_history", async (req, res) => {
 try{
	 const result = await TicketHistory.find({})
	 var data = []
	 for(var i = 0 ; i < result.length ; i++){
	 	 const user = await User.findOne({algo_address : result[i].user})
	 	 console.log(user)
	 	 	const username = user.firstName + ' ' + user.lastName
	 	 const user2 = await User.findOne({algo_address : result[i].employee})
	 	 	const employee = user2.firstName + ' ' + user2.lastName
	 	 const company = await User.findById(result[i].business)
	 	 	const business = company.company
	 	 const ticket = result[i].service
	 	 const brt = result[i].brt
	 	 const date = result[i].date	
	 	 data.push({username:username,business:business,employee:employee,ticket:ticket,brt:brt,date:date})
	 }
	 res.send({result : 'success',data : data})
 }catch(err){
 	console.log(err)
 	res.send({result:'failed'})
 }

})
 
export default router;