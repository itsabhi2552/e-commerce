const express = require('express');
const router = express.Router();

const resetPassword = require('../controllers/resetPassword');


router.route('/resetPassword').get(resetPassword.get);
router.route('/resetPassword/:id').post(resetPassword.post);

module.exports = router;