const Restaurant = require('../../models/restaurantModel');
const User = require('../../models/usersModel');



const CreateNewRestaurnat = async (req, res) => {
    const data = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).json('User not found');
    if (user.role !== 'manager') return res.status(400).json('You don\'t have permission to create a restaurant');
    const restaurant = await Restaurant.create(data);
    return res.status(200).json({ sucess: true, message: "Restaurant updated ", data: restaurant });
}


const GetAllRestaurants = async (req, res) => {
    const restaurants = await Restaurant.find();
    return res.status(200).json({ sucess: true, message: "Restaurants :", data: restaurants });
}

const GetRestaurantById = async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(400).json({ sucess: false, message: 'Restaurant not found' });
    return res.status(200).json({ sucess: true, message: "Restaurant updated ", data: restaurant });
}

const UpdateRestaurantById = async (req, res) => {
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!restaurant) return res.status(400).json({ sucess: false, message: 'Restaurant not found' });
    return res.status(200).json({ sucess: true, message: "Restaurant updated ", data: restaurant });
}

const DeleteRestaurantById = async (req, res) => {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) return res.status(400).json({ sucess: false, message: 'Restaurant not found' });
    return res.status(200).json({ sucess: true, message: "restaurant deleted !", data: restaurant });
}

const GetRestaurantByUserId = async (req, res) => {
    const restaurant = await Restaurant.findOne({ user: req.user._id });
    if (!restaurant) return res.status(400).json({ sucess: false, message: 'Restaurant not found' });
    return res.status(200).json({ sucess: true, message: "Restaurant updated ", data: restaurant });
}
module.exports = {
    CreateNewRestaurnat,
    GetAllRestaurants,
    GetRestaurantById,
    UpdateRestaurantById,
    DeleteRestaurantById,
    GetRestaurantByUserId
};