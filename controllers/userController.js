
const User  = require('../model/user.model');






exports.form = async(req,res)=>{
    try{
        name = req.params.username;
        user = await User.findOne({UserName:name});
        res.render('splashForm',{
            userd:user

        })
      
    }catch(err){
        console.log(err.message);
        res.render('error');
    }
}