const jwt = require('jsonwebtoken');
const dotEnv = require('dotenv');
const { json } = require('body-parser');

dotEnv.config();


const SignToken = (user) => {
    const payload = {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
    };
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: "90h"
    });
}




const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '20min' });
}



module.exports = { SignToken, generateAccessToken };