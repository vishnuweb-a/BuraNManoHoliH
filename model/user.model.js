const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
  UserName :{
    type :String,
    required :true,
    unique:true,
    trim:true,
  },
  password :{
    type:String,
    required :true,
    trim:true,
  },
  splashLinkUrl :{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  created:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model('User',userSchema);

