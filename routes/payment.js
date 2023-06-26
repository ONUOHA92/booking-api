const express = require('express');
const { paymentInitiate } = require('../controllers/payment');
const verifyToken = require('../middleware/auth')

const router = express.Router();

//login a /api/user/login
router.post("/payment/initiate", verifyToken, paymentInitiate)


module.exports = { router }