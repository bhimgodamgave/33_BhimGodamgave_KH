const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());
const { required } = require("nodemon/lib/config");


const {setMessage,getMessage} = require("./user");

app.get("/users", async (req,res)=>{
   const list = await getMessage();
   res.json(list);
});

app.post("/add-user",async(req,res)=>{
    const user = req.body;
    await setMessage(user);
    res.json("message added");
});

app.listen(4000,()=> console.log("server started"));
