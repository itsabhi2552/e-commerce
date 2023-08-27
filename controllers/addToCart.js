const setCart = require('../database/sql/setCart');

const post = (req, res) => {
    const productId = req.body.id;
    const userId = req.session.user.id;


    setCart.newCart(userId, productId, (err) => {
        if (err) {
            res.json({ err });
        } else {
            res.json({ success: 'success' });
        }
    });
};

module.exports = { post };