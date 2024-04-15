import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    // username: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    // firstName: String,
    // email: String,
    // lastName: String,
    // dob: Date,
    // role: {
    //   type: String,
    //   enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
    //   default: "USER",},
    id: String,
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    dob: String,    
    role: {type: String, enum: ["USER", "ADMIN", "STAFF", "FACULTY", "STUDENT"], default: "USER"},
  },
  { collection: "users" });
export default userSchema;

