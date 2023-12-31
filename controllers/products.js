const getCart = require('../database/sql/getCart');
const getProduct = require('../database/sql/getProduct');

const post = (req, res) => {
    const { no_of_products, starting_from } = req.body;
    const userId = req.session.user.id;

    getProduct.sizeOf(no_of_products, starting_from, (err, products) => {
        getCart(userId, (err, data) => {
            if(err) {
                res.json({ error: err.errno });
            } else {
                for(let i = 0; i < data.length; i++) {
                    for(let j = 0; j < products.length; j++) {
                        if(data[i].productid === products[j].id) {
                            products[j].myCart = true;
                            break;
                        }
                    }
                }
                res.json({ data: products });
            }
        })
    });
};

module.exports = { post };