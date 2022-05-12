const User = require('../../models/usersModel');
const Helper = require('../../helpers/Helpers');




const GetDashboard = async (req, res) => {
    const Id = req.params.id;
    const user = await User.findById(Id);
    if (!user) return res.status(404).json({    
        success: false,
        message: 'user not found'
    })
    return res.status(200).json({
        success: true,
        message: `wellcome to your dashboard ${user.name}`,
        data: user
    });
}


module.exports = {  GetDashboard };