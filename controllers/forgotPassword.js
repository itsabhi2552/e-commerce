const sendMail = require('../methods/sendMail');
const getEmail = require('../methods/getForgotPasswordEmail');

const get = (req, res) => {
    res.render('forgotPassword', { error: '' });
};

const post = (req, res) => {
    if(req.body.user) {
        getEmail(req.body.user, (email) => {
            sendMail(email);
            res.render('forgotPassword', { error: 'Email Sent' });
        });
    } else {
        res.render('forgotPassword', { error: req.body.msg });
    }
};

module.exports = { get, post };