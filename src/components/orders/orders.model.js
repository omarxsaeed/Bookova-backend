import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: { type: Number, required: true, unique: true },
  customerId: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  orderedBooks: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Book", required: true }],
  orderDate: { type: Date, default: Date.now },
  shippingDate: { type: Date },
  shippingAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
    },
  },
  orderStatus: { type: String, enum: ["Pending", "Delivered", "Cancelled"], default: "Pending" },
  orderTotal: { type: Number, required: true },
  notes: { type: String, default: "" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
