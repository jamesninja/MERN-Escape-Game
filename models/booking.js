import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    slots:Date,
    players: Array
});
//creation du modele room a partir du schema

export default mongoose.model("Booking",bookingSchema );