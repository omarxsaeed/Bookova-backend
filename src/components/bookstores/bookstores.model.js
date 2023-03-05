import mongoose from "mongoose";

const bookstoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  owner: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    required: true,
  },
  // location: {
  //   type: {
  //     type: String,
  //     enum: ["Point"],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     required: true,
  //   },
  //   formattedAddress: {
  //     type: String,
  //     required: true,
  //   },
  // },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
  },
  contact: {
    phone: {
      type: String,
      required: true,
    },
    email: String,
    website: String,
  },
});

const Bookstore = mongoose.model("Bookstore", bookstoreSchema);

export default Bookstore;
