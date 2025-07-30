const mongoose=require('mongoose');

const BookSchema=new mongoose.Schema(
  {
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishYear:{
        type: Number
        
    },
    genre:{
      type:String , 
       enum:['self help' , 'comic' , 'romance' , 'mystry-thriller' , 'fiction' , 'non fiction'  , 'Biography' , 'poetry' ],
       required:true
    },
    description:{
      type:String
    },
    image:{
      type:String
    },
    quantity:{
      type:Number,
      default:0
    },
    price:{
      type:Number,
      required:true
    },
     user: { 
      type: mongoose.Schema.Types.ObjectId,
       ref: 'User' 
    }
  },
  { 
    timestamps: true,
  }
);

module.exports=mongoose.model('Book', BookSchema);