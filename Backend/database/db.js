import mongoose from "mongoose";

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To Database");
    }catch(error){
        console.log("Error connecting to Database",error.message);
    }
}

export default connectdb;