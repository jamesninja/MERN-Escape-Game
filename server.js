'use strict'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRoutes from "./routes/user.js"
import roomRoutes from "./routes/room.js"
import cors from 'cors'

const app = express();
const PORT = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/users", userRoutes)
app.use("/rooms", roomRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
    
app.listen(PORT, () => {
  mongoose.connect('mongodb+srv://TokenAlpha:GtPkohHwZt9drVi9@cluster0.zcmvm.mongodb.net/Escape-Game?retryWrites=true&w=majority')
  .then(()=>console.log('Connexion à MongoDB réussie !')) 
  .catch(err => console.log("Error Connexion"))
 console.log(`express start at http://localhost:${PORT}`)
})


