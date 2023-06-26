const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = Schema({
    first_name: {
        type: String,
        required: [true, "please provide your firstName"]
    },

    last_name: {
        type: String,
        required: [true, "please provide your middleName"]
    },

    email: {
        type: String,
        lowercase: true,
        required: [true, "email is required"],
        unique: [true, "email has already been registered"]
    },

    location: {
        type: String
    },

    password: {
        type: String,
        required: [true, " password is required"],
        minlength: [8, "minimum password length is 8"],

    },

    phone_number: {
        type: String,
        require: [true, 'Your phone number must be 11 digit']
    },

    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem'
    }],

    data: {
        type: Date,
        default: Date.now()
    }
})

userSchema.methods.generateAuthToken = async () => {
    user = this
    const token = jwt.sign({ user_id: user._id.toString() }, "user token")

    return token
}


const User = mongoose.model("User", userSchema)

module.exports = { User }