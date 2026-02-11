const UserController = require('../controllers/user.controller');
const Dashboard = require('../controllers/dashboard.splash');

const express =  require('express');

const router = express.Router();

router.get('/register',(req,res)=>{
   res.render('userRegister');
});
router.get('/login',(req,res)=>{
  res.render('userLogin');
});



// register =>
  router.post('/api/auth/register',UserController.register);
//login =>
  router.post('/api/auth/login',UserController.login);








module.exports = router;