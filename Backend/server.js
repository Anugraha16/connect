import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import connectDB from "./database/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app=express();
app.use(express.json()); //to parse incoming request with JSON payload
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/auth',authRoute);
app.use('/messages',messageRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running on port ${PORT}`)
})