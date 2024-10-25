//signup route
import User from "../models/user";

export const signup=async(req,res)=>{
    try{
    const {fullName,userName,password,confirmPassword,gender} = req.body;
    if(password!==confirmPassword){
        return res.status(400).json({error:'password mismatched'});
    }

    //Check user data 
    const user=await User.findOne({userName});
    if(user){
        return res.status(400).json({error:'User already exist'});
    }

    //Hash password



    let profilepic=''
    //Avatar generator
    if(gender=='male'){
        profilepic=`https://avatar.iran.liara.run/public/boy/${userName}`;
    }
    else{
        profilepic=`https://avatar.iran.liara.run/public/girl/${userName}`;
    }

    const newUser=new User({
        fullName,
        userName,
        password,
        gender,
        profilepic,
    });
    await newUser.save();
    res.status(200).json({message:'User created successfully'});
}
catch(error){
 res.status(500).json({error:error.message});
}}


//login routes
export const login=async(req,res)=>{
    res.send('login');
}



//logout route
export const logout=async(req,res)=>{
    res.send('logout');
}