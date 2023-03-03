import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
  name  : {type : String,required: false },	
  unit_name : {type : String,required: false },	
  picture  : {type : String,required: false },	
  video  : {type : String,required: false },	
  algo  : {type : String,required: false },	
  usdc  : {type : String,required: false },	
  price : { type: String, required: false }, 
  creator : { type: String, required: false }, 
  description : { type: String, required: false }, 
});

export const Ticket = mongoose.model("ticketTable", ticketSchema);
