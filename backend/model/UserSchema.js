const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema =mongoose.Schema(
    {
    name:{
        type:String , 
        required:true
    },
    phone:{
        type:String
    },
    email:{
        type:String,
        required:true,
        uniqe:true
    },
    password:{
        type:String,
        required:true
    },
    storeName:{
        type:String,
        required:true
    },
    securityQuestion:{
        type:String , 
        required:true
    },
    securityAnswer:{
        type:String , 
        required:true
    },
},
 { 
    timestamps: true,
  }
);

UserSchema.pre('save' , async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password , 10);
    next();
})

UserSchema.methods.comparePassword = function (pass){
    return bcrypt.compare( pass ,this.password);
}

module.exports=mongoose.model("User" , UserSchema);