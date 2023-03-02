import Router from "express";
import { Discount } from "../models/discountModel.js";
import { User } from "../models/userModel.js";
const router = Router();

router.post('/get', async(req,res) => {

	const {address} = req.body;
	if(!address)
		return res.send({result:'failed'})
	else
		try{
			const record =  await Discount.findOne({company:address})
			
			res.send({result:'success',data : record})

		}catch(err){
			console.log(err)
			res.send({result:'failed'})
		}
})
router.post('/update', async(req,res) => {

	const {address,rate,limit,freeAmount,nftoffer} = req.body;
	try{
		const record =  await Discount.findOne({company:address})
		if(record){
			record.discount_rate = rate
			record.discount_limit = limit
			record.free_product_amount = freeAmount
			record.blockreward_offer = nftoffer
			record.save()
		}else{
			const company = address
			const discount_rate = rate
			const discount_limit = limit
			const free_product_amount = freeAmount
			const blockreward_offer = nftoffer
			const newRec = new Discount({
				company,
				discount_rate,
				discount_limit,
				free_product_amount,
				blockreward_offer,
			})
			await newRec.save()
		}

		res.send({result:'success'})
	}catch(err){
		console.log(err)
		res.send({result:'error'})
	}
})
export default router;