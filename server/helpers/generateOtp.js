const otpGenerator = require('otp-generator');
const dotEnv = require('dotenv');
dotEnv.config();
// const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constants');


module.exports.generateOTP = () => {
    OTP_CONFIG = {
        upperCaseAlphabets: true,
        specialChars: false,
    }
    const OTP = otpGenerator.generate(process.env.OTP_LENGTH, OTP_CONFIG);
    return OTP;
};

// The OTP_LENGTH is a number, For my app i selected 10.
// The OTP_CONFIG is an object that looks like 