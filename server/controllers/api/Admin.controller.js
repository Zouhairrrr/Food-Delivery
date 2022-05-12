const User = require('../../models/usersModel');
const Helper = require('../../helpers/Helpers');



const CreateManager = async (req, res) => {

    const data = req.body;
    const isMatch = Helper.CheckPassword(data.password, data.confirmPassword);
    if (isMatch === false) return res.status(400).json({ success: false, message: 'password does not match' })
    data.password = Helper.HashPassword(data.password);
    data.role = 'manager';
    await User.create(data, (err, response) => {
        if (err) return res.status(400).json(err);
        if (!response) return res.status(404).json({
            success: false,
            message: 'user not created'
        });
        return res.status(200).json({
            success: true,
            message: 'created successfully ',
            data: response
        });
    })
}
const UpdateManager = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const isMatched = Helper.Idmatch(id);
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    });
    if (isMatched === false) return res.status(404).json({
        success: false,
        message: 'id is not valid'
    });
    const manager = await User.findByIdAndUpdate({ _id: id }, data, { new: true });

    if (!manager) return res.status(404).json({
        success: false,
        message: 'user not found'
    });
    return res.status(200).json({
        success: true,
        message: 'updated successfully ',
        data: manager
    });
}

const GetAllManagers = async (req, res) => {
    const manager = await User.find({ role: 'manager' })
    if (!manager) return res.status(404).json({
        success: false,
        message: 'no manager found in database'
    });
    return res.status(200).json({
        success: true,
        message: 'all managers',
        data: manager
    });

}

const GetManager = async (req, res) => {
    const id = req.params.id;
    const isMatched = Helper.Idmatch(id);
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    });
    if (isMatched === false) return res.status(404).json({
        success: false,
        message: 'id is not valid'
    });
    const manager = await User.findOne({ _id: id });
    return res.status(200).json({
        success: true,
        message: 'manager selected',
        data: manager
    });
}

const DeleteManager = (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    });
    const isMatched = Helper.Idmatch(id);
    if (isMatched === false) return res.status(404).json({
        success: false,
        message: 'id is not valid'
    });
    User.findOneAndDelete({ _id: id }, (err, response) => {
        if (err) return res.status(400).json(err);
        if (!response) return res.status(404).json({
            success: false,
            message: 'user not found'
        });
        return res.status(200).json({
            success: true,
            message: 'user deleted',
        });
    })
}

const GetAllUsers = async (req, res) => {
    const user = await User.find({})
    if (!user) return res.status(404).json({
        success: false,
        message: 'no user found in database'
    });
    return res.status(200).json({
        success: true,
        message: 'all users',
        data: user
    });

}


const deleteOrder = async (req, res) => {
    const id = req.params.id;
    const isMatched = Helper.Idmatch(id);
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    });
    if (isMatched === false) return res.status(404).json({
        success: false,
        message: 'id is not valid'
    });
    const order = await User.findOneAndDelete({ _id: id });
    if (!order) return res.status(404).json({
        success: false,
        message: 'order not found'
    });
    return res.status(200).json({
        success: true,
        message: 'order deleted',
        data: order
    });
}


const confirmOrder = async (req, res) => {
    const id = req.params.id;
    const isMatched = Helper.Idmatch(id);
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    });
    if (isMatched === false) return res.status(404).json({
        success: false,
        message: 'id is not valid'
    });
    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).json({
        success: false,
        message: 'user not found'
    });
    user.isConfirmed = true;
    await user.save();
    return res.status(200).json({
        success: true,
        message: 'user confirmed',
        data: user
    });
}


module.exports = { CreateManager, UpdateManager, GetAllManagers, GetManager, DeleteManager, GetAllUsers };