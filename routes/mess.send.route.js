const express = require('express');
messRouter = express.Router();
const formSending =  require('../controllers/userController');
const MessageSending = require('../controllers/messageController');




messRouter.get('/:username',formSending.form);

messRouter.post('/submit/:id',MessageSending.message)


module.exports =messRouter;