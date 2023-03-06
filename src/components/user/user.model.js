import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  nId: { type: String, required: true },
  picture: { type: String, required: true },
  address: {
    type: {
      city: String,
      street: String,
    },
    required: true,
  },
  phone: { type: String, required: true },
  verificationCode: { type: String, required: true },
  codeExpiryDate: { type: Date },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);
export default User;
