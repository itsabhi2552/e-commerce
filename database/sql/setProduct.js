const client = require('./getClient');

const addProduct = (data, callback) => {
    const { name, image, price, description, quantity } = data;

    client
        .query(`INSERT INTO PRODUCT(NAME, IMAGE, PRICE, DESCRIPTION, QUANTITY) 
        VALUES('${name}', '${image}', ${price}, '${description}', ${quantity})`)
        .then(data => callback(null))
        .catch(err => callback(err.stack));
};

module.exports = addProduct;