const express = require('express');
const mongoose = require('mongoose');
 require('dotenv').config();
const  cors = require('cors');
const cookie = require('cookie-parser');
const path = require('path');
// modules 
const User = require('./model/user.model');
const Router = require('./routes/user.auth');
const mess = require('./routes/message.route');
const senderMess = require('./routes/mess.send.route');









const app =express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookie());
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));



// mongodb connection =>
mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("connected to database");
}).catch((err)=>{
  console.log(err);
});


app.use('/',Router);
app.use('/splash',senderMess);

// This tells the server: if someone visits the main link, send them to login
app.get('/', (req, res) => {
    res.redirect('register'); 
});



// connection of the server
app.listen(process.env.PORT,()=>{
  console.log("server is running on port ");
});




