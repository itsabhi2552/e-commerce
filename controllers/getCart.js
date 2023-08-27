const getMyCart = require('../database/sql/getMyCart');

const get = (req, res) => {
    const { id } = req.session.user;

    getMyCart(id, (err, data) => {
        res.json(data);
    });
};

module.exports = { get };