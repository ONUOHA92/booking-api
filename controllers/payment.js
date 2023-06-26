const express = require('express');
const router = express.Router();
const Paystack = require('paystack');
const Payment = require('../models/payment');

const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);


const paymentInitiate = async (req, res) => {
    try {
        const { userId, amount } = req.body;

        // Create a payment record in the database
        const payment = await Payment.create({
            user: userId,
            amount,
            reference: '' // Generate a unique reference for the payment
        });

        // Initialize payment with Paystack
        const initializePayment = await paystack.initializeTransaction({
            amount: amount * 100, // Paystack expects amount in kobo (multiply by 100)
            email: 'user@example.com', // Provide the customer's email
            reference: payment.reference,
            callback_url: 'http://your-callback-url' // Set up your callback URL
        });

        // Redirect the user to the payment page
        res.redirect(initializePayment.data.authorization_url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while initiating the payment' });
    }
}


module.exports = { paymentInitiate }
