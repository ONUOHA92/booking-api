const express = require('express');
const { CartInfo } = require('../controllers/cart');
const verifyToken = require('../middleware/auth')

const router = express.Router();

//login a /api/user/login
router.post("/cart", verifyToken, CartInfo)


module.exports = { router }