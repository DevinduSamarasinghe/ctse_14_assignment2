import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv/config";

import routers from "./routers/index.js";

const app = express()
const PORT = process.env.PORT || 80
app.use(cors());
app.use(bodyParser.json());

routers(app);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);


app.get("/", (req,res)=>{
    res.send("Final Deploy-test commit")
})

app.get("/info",(req,res)=>{
    res.send("IT21003332 - Devindu Samarasinghe\nIT21004636 - Nashali Perera\nIT21004322 - Chanukya Serasinghes and sons lol\IT21008382 - Madusha Muthusinghe returns")
})

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

