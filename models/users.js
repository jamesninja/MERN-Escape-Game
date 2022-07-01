import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    isAdmin:Boolean,
    firstname:String,
    lastname:String,
    email:String,
    password:Number,
  })
  //creation du modele user a partir du schema
  export default mongoose.model("User",userSchema);
