import Router from "express";
import { Ticket } from "../models/ticketModel.js";
import { User } from "../models/userModel.js";
import {transferAlgo,transferUSDC,getSecrectKey,cidToReserveURL,CreateArc19,RemoveAsset,transferToken,RemoveAssetbyID} from './Lib/algorand.js'
import {TicketHistory} from "../models/ticketRedeemModel.js" 
const router = Router();
 
router.post("/update_ticket", async (req, res) => {
	
   try{
          const {address,name,price,algo,usdc} = req.body;
          const user = await User.findOne({algo_address : address})
          if(user.role == 0) {
  			  const rec = await Ticket.findOne({name : name})
  			  if(rec){
  			  	rec.price = price;
            rec.algo = algo;
            rec.usdc = usdc;
  			  	await rec.save()
   	        return   res.send({result : 'success'})
            } 
          }
          else 
              return  res.send({result : 'failed',msg : 'Not Allowed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
})
router.post("/get_ticket", async (req, res) => {
	
   try{
          const {address,name} = req.body;
          const user = await User.findOne({algo_address : address})
          if(user.role == 0) {
			  const rec = await Ticket.findOne({name : name})
	          	return   res.send({result : 'success',data : rec})			 	
			  }					
          else 
              return  res.send({result : 'failed',msg : 'Not Allowed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
})
router.post("/get_price", async (req, res) => {
  
   try{
          const {ticket_name} = req.body;
          
          const rec = await Ticket.findOne({name : ticket_name})
              return   res.send({result : 'success',data : rec.price})        
         
   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
})

router.post("/get", async (req, res) => {
  
   try{
           
          const rec = await Ticket.find({})
          res.send({result:'success',data : rec})

   }catch(err){
        console.log(err)
        res.send({result : 'failed',msg : 'Not Allowed'})

   }
})
router.post("/buy", async (req, res) => {
  const { address, ticket, currency } = req.body

   try{
        const user = await User.findOne({algo_address:address})
    
        const ticket_d = await Ticket.findById(ticket)
    
    
        // await RemoveAsset(address,getSecrectKey(user.algo_sk),'mTicket',ticket_d.creator)
        // return;
      
        const ticket_price = ticket_d.price
        const to = ticket_d.creator
        if(currency == "algo"){
         const price =  ticket_d.algo;

         await transferAlgo(address,to,price,getSecrectKey(user.algo_sk) )
        }
        else {
         const price =  ticket_d.usdc;
         await transferUSDC(address,to,price,getSecrectKey(user.algo_sk))
        }

         const {url,reserveAddress} = cidToReserveURL(ticket_d.picture.slice(21))
         await CreateArc19(address,ticket_d.creator,ticket_d.name,ticket_d.unit_name,ticket_d.description,url,reserveAddress,getSecrectKey(user.algo_sk)) 
     
         const admin = await User.findOne({algo_address:ticket_d.creator})
         if(admin) 
            await transferToken(to,address,ticket_price,getSecrectKey(admin.algo_sk))

         res.send({result : 'success'}) 
   }catch(err){
        console.log(err)
        res.send({result : 'failed'})
   }  
}
)

const saveHistory = async (user,employee,business,service,brt)=>{

  const date_d = new Date();
  let day = date_d.getDate();
  let month = date_d.getMonth() + 1;
  let year = date_d.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let date = `${year}-${month}-${day}`;
  try{
      const newRec = new TicketHistory({
      user,
      employee,
      business,
      service,
      brt,
      date
    })
     await newRec.save()
  }
  catch(err){
    console.log(err)  
  }

}
router.post("/discount", async (req, res) => {
  const { address, type, user_address } = req.body

   try{
         const user = await User.findOne({algo_address : address})
         if(user){
 
           if(user.role == 2){
              const client = await User.findOne({algo_address : user_address})
              if(!client) 
                   res.send({result : 'failed'})
              const rec = await Ticket.findOne({name:type})   
              if(!rec) 
                   res.send({result : 'failed'}) 
              await transferToken(user_address,address,1,getSecrectKey(client.algo_sk))
              saveHistory(user_address,address,user.employeer,type,1)
                   res.send({result : 'success',msg :"1 BRT is deposited Successfully."})
           }
           else{
               res.send({result : 'failed', msg : 'Not Allowed'})
           }
         }
         else
          res.send({result : 'failed'})

   }catch(err){
        console.log(err)
        res.send({result : 'failed'})
   }
})
export default router;