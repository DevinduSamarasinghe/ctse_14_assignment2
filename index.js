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

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB connection success!\n${process.env.MONGODB_URL}`);
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

