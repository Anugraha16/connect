import Converastion from "../models/conversation.js";
import Message from "../models/message.js";

export const sendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let conversation= await Converastion.findOne({
            participants: {$all:[senderId,receiverId]},
        })

        if(!conversation){
            conversation=await Converastion.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //Socket code:

        await Promise.all([conversation.save(),newMessage.save()]); //parallel execution

        res.status(201).json({newMessage});

    }
    catch(error){
        console.log("Error in messagecontroller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}