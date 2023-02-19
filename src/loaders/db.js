import mongoose from "mongoose";
import config from "../config/index.js";

const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(config.db.local);
    console.log(`MongoDB connected successfully at: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectMongoose;
