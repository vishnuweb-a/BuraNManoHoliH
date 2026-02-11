
const SplashMessage = require('../model/splash.message');
const User = require('../model/user.model');


exports.sendForm =async (req,res)=>{
   user = req.params.user;
   console.log(user)
   const UserInfo = await User.findOne({UserName:user});
   if(!UserInfo){
    res.redirect('/splash/error');
   }else{
    res.render('splashForm',{
      user:UserInfo
    })
   }
}

exports.sendMess =async (req,res)=>{
 let{splashMessage,color}=req.body;

 let userId = req.params._id;
  await SplashMessage.create({
    recipantId :userId,
     splashMessage,
     color
  });
  res.render('thanku.ejs');

  
}