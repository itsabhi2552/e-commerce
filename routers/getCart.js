const express = require('express');
const router = express.Router();

const getCart = require('../controllers/getCart');
const checkAuth = require('../middlewares/checkAuth');

router.route('/getCart').get(checkAuth, getCart.get);

module.exports = router;