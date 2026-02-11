const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();




function linkGenerate(name){
 let  splashName = name.toLowerCase().split(' ').join('-');
 const link =` http://localhost:3000/splash/${splashName}`;
  return link;
}
// jwt token genneration =>
  function generateToken(name){
    const token = jsonwebtoken.sign({name},process.env.JWT_SECRET,{expiresIn:'1d'});
    return token;
  }


exports.register =async (req,res)=>{
  let{username,password}=req.body;
  console.log(username);

  

  encryptedPassword = bcrypt.hashSync(password,10); // passsword encrypting .
  const slurLink = linkGenerate(username);

  user = await User.create({
    UserName:username,
    password:encryptedPassword,
    splashLinkUrl :slurLink,

});
console.log(user);

screenToken = generateToken(username);
console.log(screenToken);


res.cookie('screenToken',screenToken,{
  httpOnly:true})
  console.log(req.cookies);
    res.redirect('/home');
}

exports.login =async (req,res)=>{
  let{username,password}=req.body;
  const user = await User.findOne({UserName:username});
  if(!user){
    res.redirect('/login');
  }
  else{
    if(bcrypt.compareSync(password,user.password)){
      const screenToken =  generateToken(username);
      res.cookie('screenToken',screenToken);
      res.redirect('/splash');
    }else{
      res.redirect('/home');
    }
  }
}