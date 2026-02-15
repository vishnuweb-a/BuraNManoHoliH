const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const Message = require('../model/message');




// urlMaking function 

function makeUrl(name){
  let  urlName = name.split(' ').join('-');
  const  url= `http://localhost:${process.env.PORT}/splash/${urlName}`;
  return url;
}



exports.register =async(req,res)=>{
    try{
       let{username,password} = req.body;
      

        encryptedPassword = await bcrypt.hash(password,10);
      const primUrl = makeUrl(username);
  const user=    await User.create({
        UserName:username,
        password:encryptedPassword,
        splashLinkUrl :primUrl
      })
      token = jwt.sign({name :username},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
      res.cookie('token',token,{
         httpOnly: true,
    secure: false, // true in production (HTTPS)
    maxAge: 3600000
      });
    console.log('came');
       res.redirect('/home');


    }catch(err){
        console.log(err);
         res.render('error.ejs');
    }
}

//login logic
exports.login = async (req,res)=>{
    try{
        let {username,password} = req.body;
        const user = await User.findOne({UserName:username});
        if(!user){
            res.render('userRegister');
        }else{
            uncrypted = await bcrypt.compare(password,user.password);
            if(uncrypted){
                  const message =await Message.find({reciever_id:user._id});
            res.render('splashSahboard', {
      userd: user,       // This passes the user object
      splashmess: mess   // Use 'mess' (the data), not 'message' (the Model)
    });
            }else{
                res.redirect('/');
            }
        }


    }catch(err){
        console.log(err);
        res.render('error.ejs');
    }
}

