const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

cartSchema.virtual('price').get(function () {
    return this.room.price * this.quantity;
});

cartSchema.virtual('vat').get(function () {
    return this.price * 0.2; // Assuming VAT is 20%
});

cartSchema.virtual('total').get(function () {
    return this.price + this.vat;
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Cart };
