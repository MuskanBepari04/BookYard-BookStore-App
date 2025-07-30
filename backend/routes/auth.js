const express=require('express')
const jwt = require('jsonwebtoken');
const router=express.Router();
const User = require('../model/UserSchema');

const secretKey = "My_Secret_key_123";

//Signup
router.post('/signup' , async (req , res)=>{
    try{
    const userData = req.body;
    const newUser = new User(userData);
    const response =await newUser.save();
    res.status(200).json(response);
    if(!response) return res.json({message:"Dalne me erros"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"error"});
    }
});

//Login

router.post('/login' , async (req , res)=>{
   try{
    const { email, password } = req.body;
    const user= await User.findOne({email});
    if(!user || !(await user.comparePassword(password))){
        return res.status(401).json({message:"Invalid User or User Not Preent"})
    }
    const token=jwt.sign({userId : user._id} ,secretKey, {expiresIn : '1d'} );
    res.status(200).json({token});

   }catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
})

router.post('/forgot-password', async(req,res)=>{
    const {email , securityAnswer , newPassword}=req.body;
    try{
        const user =await User.findOne({email});
        if(!user || user.securityAnswer !== securityAnswer) return res.status(500).json({message: "User Not Found"})
        
        user.password=newPassword;
        await user.save();
        res.json({ message: 'Password reset successfully' });

    }catch(err){
        console.log(err)
        res.status(500).json({ error: err });
    }
})

module.exports=router;