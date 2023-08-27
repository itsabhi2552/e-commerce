const sendMail = require('../methods/sendMail');
const setUser = require('../database/sql/setUser');
const getUserBody = require('../methods/getUserBody');
const getEmail = require('../methods/getUserVerificationEmail');

const get = (req, res) => {
    res.render('signup', { msg: '', value: 'Create', backBtn: '' });
};

const post = (req, res) => {
    const { msg } = req.body;

    if (msg) {
        const { email, username, password } = req.body;

        getUserBody({ email, username, password }, (user) => {
            setUser.newUser(user, (err) => {
                if (err) {
                    res.render('signup', { msg: 'Something went wrong!', value: 'Create', backBtn: '' });
                } else {
                    getEmail(user, (email) => {
                        sendMail(email);
                        res.render('signup', { msg: 'Pending email verification!', value: 'Create', backBtn: '' });
                    });
                }
            });
        });
    } else {
        res.render('signup', { msg: 'User already have a account', value: 'Create', backBtn: '' });
    }
};

module.exports = { get, post };