const jwt=require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(404).json({message:"unauthorized"});

    try{
        const decoded =jwt.verify(token , secretKey);
        req.userId=decoded.userId;
        next();

    }catch(error){
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports=authMiddleware;