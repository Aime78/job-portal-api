import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    type: String,
    company: String,
    salary: String,
    jobType: String,
    experience: String,
    datePosted: Date,
  });