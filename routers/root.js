const express = require('express');
const router = express.Router();

const root = require('../controllers/root');

router.route('/').get(root.get);

module.exports = router;