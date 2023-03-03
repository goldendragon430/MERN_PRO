import mongoose from "mongoose";

const membershipshopSchema = mongoose.Schema({
    company_id: { type: String, required: false },
    membership_id: { type: String, required: false },
    user_id:{ type: String, required: false },
 });

export const MembershipShop = mongoose.model("reactMembershipShop", membershipshopSchema);
