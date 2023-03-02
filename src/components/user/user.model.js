import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  nId: String,
  picture: String,
  address: {
    city: String,
    street: String,
  },
  phone: String,
  isVerfied: { type: Boolean, default: false },
  verficationCode: String,
});

const User = mongoose.model("user", userSchema);
export default User;
