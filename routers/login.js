const express = require('express');
const router = express.Router();

const login = require('../controllers/login');
const checkAuth = require('../middlewares/checkAuth');
const userExits = require('../middlewares/userExits');

router.route('/login').get(checkAuth, login.get).post(userExits, login.post);

module.exports = router;