const updateProduct = require('../database/sql/updateProduct');

const post = (req, res) => {

    if(req.file) {
        req.body.image = req.file.filename;
    }

    updateProduct(req.body, (err) => {
        if(err) {
            console.log('err');
        }
        res.redirect('/showAllProducts');
    });
};

module.exports = { post };