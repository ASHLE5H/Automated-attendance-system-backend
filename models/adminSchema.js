const mongoose=require("mongoose");

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
    college: { type: String, required: true }, // College name
  });
  
  module.exports = mongoose.model("Admin", adminSchema);
  