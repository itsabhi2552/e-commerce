const get = (req, res) => {
    const { username } = req.session.user;
    res.render('showAllProducts', { username });
};

module.exports = { get };