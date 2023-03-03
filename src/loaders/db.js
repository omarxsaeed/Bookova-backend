import mongoose from "mongoose";
import config from "../config/index.js";

const connectMongoose = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const db = await mongoose.connect(config.db.atlas, connectionParams);
    console.log(`MongoDB connected successfully at: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectMongoose;
