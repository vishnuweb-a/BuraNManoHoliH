
const express = require('express');
const route = express.Router();
const User = require('../model/user.model');
const Splashmessage = require('../model/splash.message');
const Dashboard = require('../controllers/dashboard.splash');

route.get('/',Dashboard.splash);


module.exports = route;





