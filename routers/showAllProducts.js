const express = require('express');
const router = express.Router();

const adminAuth = require('../middlewares/adminAuth');
const showAllProducts = require('../controllers/showAllProducts');

router.route('/showAllProducts').get(adminAuth, showAllProducts.get);

module.exports = router;