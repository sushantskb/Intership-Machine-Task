import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add email"],
    },
    phone: {
      type: String,
      required: [true, "Please add mobile no"],
    },
    designation: {
      type: String,
      required: [true, "Please add add designation"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    course: {
      type: Array,
    },
    profileImg: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", employeeSchema);
