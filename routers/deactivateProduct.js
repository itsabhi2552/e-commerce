const express = require('express');
const router = express.Router();

const adminAuth = require('../middlewares/adminAuth');
const deactivateProduct = require('../controllers/deactivateProduct');

router.route('/deactivateProduct').post(adminAuth, deactivateProduct.post);

module.exports = router;