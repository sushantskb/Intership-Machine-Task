import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please provide username"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

export const User = mongoose.model("User", userSchema);
