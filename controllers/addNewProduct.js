const setProduct = require('../database/sql/setProduct');

const post = (req, res) => {
    const { username } = req.session.user;
    req.body.image = req.file.filename;

    setProduct(req.body, (err) => {
        res.redirect('/admin')
    });
};

module.exports = { post };