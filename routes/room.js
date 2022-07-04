import  express  from "express";
const router = express.Router();
import Room from "../models/rooms.js"


// **Create**/////////////////////////////////////////////////////
router.post("/", async (req, res) => {
try {
const newRoom = new Room({
  name : req.body.name,
  price: req.body.price,
  capacityMin: req.body.capacityMin,
  capacityMax: req.body.capacityMax,
  description: req.body.description,
  ageLimit   :req.body.ageLimit
});
await newRoom.save();
res.json({ message: "Created" });
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadAll**/////////////////////////////////////////////////////
router.get("/", async (req, res) => {
try {
const rooms = await Room.find();
res.json(rooms);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadId**/////////////////////////////////////////////////////////
router.get("/:id", async (req, res) => {
try {
const room = await Room.findById(req.params.id);
res.json(room);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

//**Update**//////////////////////////////////////////////////////////
router.put('/:id', async (req, res) => {
let updates = req.body // nous definissons une variable égale à l'ensemble du req.body
try {
if(await Room.findByIdAndUpdate({_id:req.params.id},updates,{new:true})){
  res.json({ message: "Updated" });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **DeleteId**////////////////////////////////////////////////////////
router.delete('/:id', async (req, res) => {
const id = req.params.id;

try {
if(await Room.findByIdAndDelete({_id:req.params.id})){
  res.json({ message: "Removed" });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **DeleteAll**
router.delete('/', async (req, res) => {
try {
if(await Room.deleteMany()){
  res.json({ message: "Deleted Collection " });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

export default router





