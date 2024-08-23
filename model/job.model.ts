import mongoose from "mongoose";
import { jobSchema } from "../schema/job.schema";

export const Job = mongoose.model("Job", jobSchema);
