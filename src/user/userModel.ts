import mongoose from "mongoose";
import { User } from "./userTypes";

//<> called  generics in typescript
const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  //created At , updated At
  { timestamps: true }
);

// users
export default mongoose.model<User>("User", userSchema);
