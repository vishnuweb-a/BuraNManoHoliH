const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  reciever_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref :'User',
    required:true,
  },
  splashMessage:{
    type:String,
    required:true,
    trim:true,
  },
  color:{
    type:String,
    default:"pink"
  },
  created:{
    type:Date,
    default:Date.now
  }
})

module.exports =mongoose.model('SplashMessage',messageSchema);