import mongoose from "mongoose";

const reedmeSchema = mongoose.Schema({
  business : { type: String, required: false }, 
  user: { type: String, required: false },
  service: { type: String, required: false },
  BRT: { type: String, required: true },
  date: { type: String, required: true },
  confirm_date: { type: String, required: false },
  discount_code:{ type:String,  required:false}
});

export const ReedMe = mongoose.model("redeemHistory", reedmeSchema);
