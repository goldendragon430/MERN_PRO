import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    company: { type: String, required: false },
    vat: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    address: { type: String, required: false },
    postalCode: { type: String, required: false },
    city: { type: String, required: false },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    isInterpreter: { type: String, required: false },
    balance:{type:String,required:false},
    algo_address:{type:String,required:false},
    algo_sk:{type:String,required:false},
    eth_address : {type:String,required:false},
    eth_data : {type:String,required:false},
    membership : {type:String,required:false},
    role: {type:String,required:false},
    allow : {type:String,required:false},
    isBusinessOwner : {type:String,required:false},
    businessKey : {type:String,required:false},
    employeer : {type:String,required:false},
    blockrewardUserName : {type:String,required:false},
    twiterName : {type:String,required:false},
    instagramName : {type:String,required:false},
    businessType : {type:String,required:false},

});

export const User = mongoose.model("reactUser", userSchema);
