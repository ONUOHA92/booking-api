const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema for the room model,


const roomSchema = Schema({
    type: {
        type: String,
        enum: ['private', 'public'],
        default: 'private'

    },

    guestName: {
        type: String,
        required: [true, "please provide your guest name"]
    },

    checkInDate: {
        type: Date,
        required: [true, "Check in date is required"],
    },

    checkOutDate: {
        type: Date,
        required: [true, "Check in date is required"],
    },

    price: {
        type: String,
        required: [true, " price is  is required"],


    },

    date: {
        type: Date,
        default: Date.now()
    }
})




const Room = mongoose.model("Room", roomSchema)

module.exports = { Room }