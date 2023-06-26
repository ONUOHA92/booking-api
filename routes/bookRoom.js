const express = require('express');
const { BookRoom } = require('../controllers/bookRoom');
const verifyToken = require('../middleware/auth')

const router = express.Router();

//login a /api/user/login
router.post("/rooms/book", verifyToken, BookRoom)


module.exports = { router }