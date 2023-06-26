const express = require('express');
const { Room } = require('../models/room');
const { Cart } = require('../models/cart');


const CartInfo = async (req, res) => {
    try {
        const { userId, roomId, quantity } = req.body;

        // Find the room in the database
        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        // Calculate the price
        const price = room.price;
        const guestName = room.guestName

        // Create a new cart item for the logged-in user and the room
        const cartItem = new Cart({
            user: userId,
            room: room._id,
            quantity
        });

        // Save the cart item to the database
        await cartItem.save();

        res.json({ cartItem, price, guestName });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the room to the cart' });
    }
}


module.exports = { CartInfo }
