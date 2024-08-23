import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    gender: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
    region: { type: String, default: null },
    city: { type: String, default: null },
    monthlySalary: { type: String, default: null },
    resume: { type: String, default: null },
  });
  