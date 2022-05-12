const User = require('../../models/usersModel');
const SignToken = require('../../helpers/signToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const validateForm = require('../../middlewares/validateForm');
const Password = require('../../helpers/Helpers');
const dotEnv = require('dotenv');
dotEnv.config();





const CreateNewUser = async (req, res) => {
    try {
        const data = req.body;
        data.password = Password.HashPassword(data.password);
        await User.create(data, (err, response) => {
            if (err) return res.status(400).json(err);
            if (!response) return res.status(404).json({
                success: false,
                message: 'user not created'
            });
            return res.status(201).json({
                success: true,
                message: 'created successfully ^_^', data: response
            });
        })
    } catch (error) {
        res.status(500).send('server down');
    }
}

const AuthenticateUser = async (req, res) => {

    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email })
        let token;
        if (!user) return res.status(401).json({
            success: false,
            message: 'user not found'
        })
        const isMatch = await Password.isValid(data.password, user.password);
        if (!isMatch) return res.status(401).json({
            success: false,
            message: "Password dosen't match"
        })
        if (user.isActive === false) {
            const payload = {
                user: {
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    refrechToken: user.refrechToken,
                    clientId: user.clientId,
                    clientSecret: user.clientSecret,
                    redirectUri: user.redirectUri,
                }
            };
            const linked = SignToken.generateAccessToken(payload);
            const link = `http://localhost:8080/auth/users/activate-account/${linked}`;
            return res.json({
                success: true,
                message: 'link to ferify your account',
                data: link,
            });
        }
        return res.status(200).json({
            success: true,
            message: `login successfully ^_^ welcome : ${user.name} and your role is : ${user.role} `,
            data: user,
            token: token
        })

    } catch (error) {
        res.status(403).send('access forbiden');
    }

}

const ActivateAccountForLogin = async (req, res) => {

    try {
        const token = req.params.token;
        const TokenIsvalid = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!TokenIsvalid) return res.status(401).json({
            success: false,
            message: 'Authentication failed'
        });
        const user = await User.findById(TokenIsvalid.user.id);
        if (!user) return res.status(401).json({
            success: false,
            message: 'user not found'
        })
        user.isActive = true;
        user.refrechToken = '';
        const token_ = SignToken.SignToken(user);
        await user.save();
        return res.status(200).json({
            success: true,
            message: 'account activated successfully ^_^',
            data: user,
            token: token_
        });
    } catch (error) {
        res.status(400).send('Invalid token !');
    }
}

const ForgotPassword = async (req, res) => {

    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });
        if (!user) return res.status(401).json({
            success: false,
            message: 'user not found'
        })
        const link = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        const mailOptions = {
            from: 'Contact team',
            to: user.email,
            subject: 'Reset Password',
            html: `<h1>Reset Password</h1>
            <p>Click on the link to reset your password</p>
            <a href="http://localhost:8080/auth/users/activate-password/${link}">Reset Password</a>`
        }
        await User.findOneAndUpdate({ email: data.email }, { refrechToken: link });
        await User.sendMail(mailOptions);
        return res.status(200).json({
            success: true,
            message: 'please check your email to reset password',
        });

    } catch (error) {
        res.status(401).send('Invalid email not sent !');
    }
}

const ActivatePassword = (req, res) => { }
const ResetPassword = (req, res) => { }

const LogoutUser = (req, res) => { }

module.exports = {
    CreateNewUser,
    AuthenticateUser,
    ForgotPassword,
    ActivatePassword,
    ResetPassword,
    LogoutUser,
    ActivateAccountForLogin
}