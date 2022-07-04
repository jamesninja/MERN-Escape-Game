import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
    name:String,
    price:Number,
    capacityMin:Number,
    capacityMax:Number,
    description:String,
    ageLimit:Number
});
//creation du modele room a partir du schema

export default mongoose.model("Room",roomSchema );

