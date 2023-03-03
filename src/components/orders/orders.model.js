import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerId: { type: String, required: true },
  orderedBooks: { type: [Object], required: true },
  orderDate: { type: Date, required: true },
  shippingDate: { type: Date },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
  },
  orderStatus: { type: String, enum: ["Pending", "Delivered", "Cancelled"], default: "Pending" },
  orderTotal: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
