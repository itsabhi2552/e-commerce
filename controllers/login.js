const get = (req, res) => {
    res.render('login', { msg: '' });
};

const post = (req, res) => {
    const { msg, password } = req.body;

    if (msg) {
        res.render('login', { msg });
    } else {
        const { user } = req.body;

        if (password === user.password) {
            req.session.validUser = user.verified;

            if(user.role === 'admin') {
                req.session.user = user;
                res.redirect('/admin');
            }
            else if (user.verified) {
                req.session.user = user;
                res.redirect('/home');
            } else {
                res.render('login', { msg: 'Pending Email Verification' });
            }
        } else {
            res.render('login', { msg: 'Incorrect Password' });
        }
    }
};

module.exports = { get, post };