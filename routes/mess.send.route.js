const express = require('express');
const messSend = express.Router();
const sendMessageSender = require('../controllers/sendmess');

messSend.get('/error',(req,res)=>{
  res.render('error');
})
messSend.get('/:user',sendMessageSender.sendForm);

messSend.post('/submit/:_id',sendMessageSender.sendMess);




module.exports = messSend;

