import jwt from "jsonwebtoken";


const generatetoken=(userID,res)=>{
    const token=jwt.sign({userID},process.env.JWT_secret,{
        expiresIn:'15d',
    });

res.cookie("jwt",token,{
    maxAge:15*24*60*60*1000, //ms(milliseconds)
    httponly:true, //XSS attack prevention
    samesite:"strict",  //CORS forgery attack
    secure: process.env.NODE_ENV !== "development",

})
}

export default generatetoken;


