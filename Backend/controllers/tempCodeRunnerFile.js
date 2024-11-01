try{
    const {fullName,userName,password,confirmPassword,gender} = req.body;
    if(password!=confirmPassword){
        return res.status(400).json({error:'password mismatched'});
    }