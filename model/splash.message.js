const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  recipantId :{
    type :mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  },
  splashMessage :{
    type:String,
    required:true,
    trim:true
  },
  //optional 
  color:{
    type:String,
    default:'#ff0080',
    trim:true
  },
  createdAt :{
    type:Date,
    default:Date.now
  }
});

module.exports =mongoose.model('Splash',Schema);