
import  express  from "express";
const router = express.Router();
import User from "../models/users.js"


// **Create**/////////////////////////////////////////////////////
router.post("/", async (req, res) => {
try {
const newUser = new User({
  admin:req.body.admin,
  firstname:req.body.firstname,
  lastname:req.body.lastname,
  email:req.body.email,
  password:req.body.hashPass,
});
await newUser.save();
res.json({ message: "Created" });
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadAll**/////////////////////////////////////////////////////
router.get("/", async (req, res) => {
try {
const users = await User.find();
res.json(users);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

// **ReadId**/////////////////////////////////////////////////////////
router.get("/:id", async (req, res) => {
try {
const user = await User.findById(req.params.id);
res.json(user);
} catch (error) {
res.status(400).json({ error: error.message });
}
});

//**Update**//////////////////////////////////////////////////////////
router.put('/:id', async (req, res) => {
let updates = req.body // nous definissons une variable égale à l'ensemble du req.body
try {
if(await User.findByIdAndUpdate({_id:req.params.id},updates,{new:true})){
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
if(await User.findByIdAndDelete({_id:req.params.id})){
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
if(await User.deleteMany()){
  res.json({ message: "Deleted Collection " });
} else {
  res.status(400).json({ message: "Missing id" });
}
} catch (error) {
res.status(400).json({ error: error.message });
}
});

export default router

















































