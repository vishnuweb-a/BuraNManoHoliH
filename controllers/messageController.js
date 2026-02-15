const Message = require('../model/message');
const User = require('../model/user.model');


exports.message= async (req,res)=>{
    try{
      let{splashMessage,color} = req.body;
      const id =req.params.id;
       const user = await User.findById(id);
       mess = await Message.create({
        reciever_id:user._id,
        splashMessage:splashMessage,
        color:color
       })
       if(mess){
        res.render('thanku');
       }else{
        res.render('error');
       }
    }catch(err){
        console.log(err.message);
        res.render('error');
    }
}