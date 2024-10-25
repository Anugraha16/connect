import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route.js"
import connectDB from "./database/db.js"

dotenv.config();
const PORT = process.env.PORT;

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/',authRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running on port ${PORT}`)
})