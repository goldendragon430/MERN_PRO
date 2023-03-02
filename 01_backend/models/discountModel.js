import mongoose from "mongoose";

const discountSchema = mongoose.Schema({
    company: { type: String, required: false },
    discount_rate: { type: String, required: false },
    discount_limit:{ type: String, required: false },
    free_product_amount: { type: String, required: false },
    blockreward_offer: { type: String, required: false },
 });

export const Discount = mongoose.model("reactDiscount", discountSchema);
