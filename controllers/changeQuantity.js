const setCart = require('../database/sql/setCart');
const getQuantity = require('../database/sql/getQuantity');

const post = (req, res) => {
    const userId = req.session.user.id;
    const { productId, change } = req.body;

    if (change === 'increase') {
        setCart.quantityIncrease(userId, productId, (err) => {
            if (err) {
                res.json(err);
            } else {
                getQuantity(userId, productId, (err, quantity) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(quantity);
                    }
                });
            }
        });
    } else {
        getQuantity(userId, productId, (err, quantity) => {
            if (err) {
                res.json(err);
            } else {
                if (quantity.quantity > 1) {
                    setCart.quantityDecrease(userId, productId, (err) => {
                        if (err) {
                            res.json(err);
                        } else {
                            quantity.quantity -= 1;
                            res.json(quantity);
                        }
                    });
                } else {
                    res.json(quantity);
                }
            }
        });
    }
};

module.exports = { post };