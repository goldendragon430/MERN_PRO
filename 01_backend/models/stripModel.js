import mongoose from "mongoose";

const stripSchema = mongoose.Schema({
  user_id  : {type : String,required: false },	
  firstname : {type : String,required: false },	
  lastname  : {type : String,required: false },	
  cardnumber  : {type : String,required: false },	
  expiredate  : {type : String,required: false },	
  cvc  : {type : String,required: false },
  type  : {type : String,required: false },
});

export const CreditCard = mongoose.model("creditcardTable", stripSchema);
