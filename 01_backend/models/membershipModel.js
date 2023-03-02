import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    type: { type: String, required: false },
    unit_name: { type: String, required: false },
    description:{ type: String, required: false },
    algo: { type: String, required: false },
    eth: { type: String, required: false },
    usdc: { type: String, required: false },
    creator:{ type: String, required: false}, 
    picture:{ type: String, required: false}, 
    video: { type: String, required: false}, 
    level : {type: String, required: false},
    platform_nft : {type: String, required: false},
 });

export const Membership = mongoose.model("reactMembership", membershipSchema);
