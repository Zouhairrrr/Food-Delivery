
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');


const AuthenticateToken = async (req, res, next) => {

    const { token } = req.body;
    if (!token) return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
    });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({
            success: false,
            message: 'token is not valid'
        });
        if (user.isActive === false) {
            return res.status(401).json({
                success: false,
                message: 'Please activate your account'
            });
        }
        next()
    } catch (err) {
        if (err instanceof "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: 'token is not valid'
            });
        }
        return res.status(401).json({
            success: false,
            message: 'access denied'
        });
    }
}












const chekExistUserEmail = async (req, res, next) => {
    const { email } = req.body;
    if (email) {
        const m = await User.findOne({ email: email });
        if (m) return res.status(400).json({ success: false, message: " email already exists login please " })
    }
    return next();
}

const CheckuserRole = async (req, res, next) => {
    const { role } = req.body;
    if (role === "manager" || role === "admin") {
        return next();
    }
    return res.status(400).json({ success: false, message: " role not allowed " });
}





module.exports = {
    chekExistUserEmail,
    CheckuserRole
}