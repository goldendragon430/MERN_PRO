import mongoose from "mongoose";

const ticketReedmeSchema = mongoose.Schema({
  user: { type: String, required: false },
  employee:{ type: String, required: false },
  business:{ type: String, required: false },
  service: { type: String, required: false },
  brt: { type: String, required: true },
  date: { type: String, required: true }
});

export const TicketHistory = mongoose.model("ticketRedeemHistory", ticketReedmeSchema);
