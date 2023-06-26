const express = require('express');
const { login, signUp } = require('../controllers/user');


const router = express.Router();



//signup at /api/user/signup
router.post('/signup', signUp);

//login a /api/user/login
router.post("/login", login)


module.exports = { router }