const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const HashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // console.log(HQ);
    return hash;
}

const isValid = async (userPassword, password) => {
    const passwordValide = await bcrypt.compare(userPassword, password)
    if (passwordValide) return true;
    return false;
}

const CheckPassword = (password, confirmPassword) => {
    if (password === confirmPassword) return true;
    return false;
}




const Idmatch = (id) => {
    const app = mongoose.Types.ObjectId.isValid(id);
    if (app) return true
    return false;
};


const calculateShippingPrice = (totalPrice) => {
    if (totalPrice > 100) {
        return 0;
    }
    return 10;
}



module.exports = { HashPassword, isValid, CheckPassword, Idmatch, calculateShippingPrice };