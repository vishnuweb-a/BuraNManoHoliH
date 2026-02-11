const splashMessage = require('../model/splash.message');

const User = require('../model/user.model');

const jsonwebtoken = require('jsonwebtoken');

require('dotenv').config();




exports.splash = async (req, res) => {
    try {
        const token = req.cookies.screenToken;

        // 1. If no token, stop here and redirect
        if (!token) {
            return res.redirect('/login');
        }

        // 2. Verify token and find user
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ UserName: decoded.name });

        if (!user) {
            return res.redirect('/login');
        }

        // 3. Now 'user' and 'user._id' are available in this scope
        const messInfo = await splashMessage.find({ recipantId: user._id }).sort({ createdAt: -1 });

        // 4. Render the dashboard
        res.render('splashSahboard', {
            splashmess: messInfo,
            userd: user
        });

    } catch (error) {
        // If JWT expires or any error occurs, clear cookie and go to login
        console.error("Dashboard Error:", error.message);
        res.clearCookie('screenToken');
        res.redirect('/login');
    }
};