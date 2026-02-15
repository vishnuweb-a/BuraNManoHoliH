const UserController = require('../controllers/authController');
const User = require('../model/user.model');
const message = require('../model/message');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const express =  require('express');

const router = express.Router();

router.get('/',(req,res)=>{
   res.render('userRegister');
});
router.get('/login',(req,res)=>{
  res.render('userLogin');
});




// register =>
  router.post('/api/auth/register',UserController.register);
//login =>

  router.post('/api/auth/login',UserController.login);

router.get('/home', async (req, res) => {
  try {
    const token = req.cookies.token;

    // 1. If no token, don't let them stay here!
    if (!token) {
      return res.redirect('/login'); 
    }

    // 2. Decode the token (It returns an object, e.g., { name: 'maya', iat: ... })
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 
    
    // 3. Find the user using the name property from the object
    const user = await User.findOne({ UserName: decoded.name });

    if (!user) {
      return res.redirect('/login');
    }

    // 4. Find the messages for this user
    const mess = await message.find({ reciever_id: user._id });
    console.log(mess);

    // 5. Render with the correct data variables
    res.render('splashSahboard', {
      userd: user,       // This passes the user object
      splashmess: mess   // Use 'mess' (the data), not 'message' (the Model)
    });

  } catch (err) {
    console.log("Dashboard Error:", err.message);
    // If anything fails (expired token, etc), send them to login
    res.redirect('/login');
  }
});








module.exports = router;