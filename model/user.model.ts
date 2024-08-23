import { userSchema } from " @/schema/user.schema";
import mongoose from "mongoose";

export const User = mongoose.model("User", userSchema);