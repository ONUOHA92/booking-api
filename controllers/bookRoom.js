const express = require('express');
const { Room } = require('../models/room')


// Define a route for booking a room

const BookRoom = async (req, res) => {

    // Extract the necessary details from the request body
    const { type, guestName, checkInDate, checkOutDate, price } = req.body;

    try {
        // Create a new room booking
        const bookRoom = await Room.create({
            type,
            guestName,
            checkInDate,
            checkOutDate,
            price

        })

        res.status(200).json({
            bookRoom,
            message: 'Room booked successfully!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to book the room' });
    }



}


module.exports = { BookRoom }
