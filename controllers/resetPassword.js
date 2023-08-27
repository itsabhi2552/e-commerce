const sendMail = require('../methods/sendMail');
const getUser = require('../database/sql/getUser');
const setUser = require('../database/sql/setUser');
const getEmail = require('../methods/getResetPasswordEmail');

const get = (req, res) => {
    if (req.session.user) {
        res.render('resetPassword', { id: req.session.user.id, value: 'Reset', backBtn: 'Yes' });
    } else {
        res.redirect('/login');
    }
};

const post = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    getUser({ id }, (err, user) => {
        if (err) {
            res.render('resetPassword', { id, value: 'Reset', backBtn: 'Yes' });
        } else {
            setUser.password({ id, password }, (err) => {
                getEmail(user, (email) => {
                    sendMail(email);
                    res.redirect('/home');
                });
            });
        }
    });
};

module.exports = { get, post };