import mongoose from "mongoose";

const claimSchema = mongoose.Schema({
  business  : {type : String,required: false },	
  membership : {type : String,required: false },	
  code  : {type : String,required: false },	
});

export const ClaimCode = mongoose.model("claimcodeTable", claimSchema);
