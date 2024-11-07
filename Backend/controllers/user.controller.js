import User from "../models/user.js";

export const getUserForSidebar=async(req,res)=>{
    try{
        const loggedUnUserId=req.user._id;

        const allUsers=await User.find().select("-password");
        res.status(200).json({allUsers});

    }
    catch(error){
        console.log("Error in messagecontroller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}