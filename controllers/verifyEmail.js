const getUser = require('../database/sql/getUser');
const setUser = require('../database/sql/setUser');

const get = (req, res) => {
    const { id } = req.params;

    if(req.params.redirectPage === 'resetPassword') {
        req.session.user = { id };
        res.redirect(`/${req.params.redirectPage}`);
    } else {
        getUser({ id }, (err, user) => {
            if (user) {
                setUser.verified(user, (err) => {
                    req.session.user = user;
                    req.session.user.verified = true;
                    req.session.validUser = true;
                    res.redirect(`/${req.params.redirectPage}`);
                });
            } else {
                res.redirect('/home');
            }
        });
    }
};

module.exports = { get };