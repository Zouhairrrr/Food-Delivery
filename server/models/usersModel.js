const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        phone: { type: String, required: false },
        isActive: { type: Boolean, required: true, default: false },
        imageProfile : { type: String, required: false },
        address: { type: String, required: false },
        password: { type: String, required: true },
        role: {
            type: String, required: true, default: "user",
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
        },
    },

);



const User = mongoose.model("User", UserSchema);

module.exports = User;