const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const CatigoriesSchema = new Schema({

    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    managerId: { type: Schema.Types.ObjectId, ref: "Users" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});



const Catigories = mongoose.model('Catigories', CatigoriesSchema);

module.exports = Catigories;