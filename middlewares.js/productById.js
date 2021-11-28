const mongoose = require('mongoose');
const Product = require('../models.js/model2')

module.exports = async function (req, res, next) {
    const {
        productId
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(403).json({
            error: 'Produit introuvable'
        })
    }

    try {
        const product = await Product.findById(productId).populate('modelCategory')

        if (!product) {
            return res.status(403).json({
                error: 'Produit introuvable'
            })
        }

        req.product = product
    } catch (error) {
        console.log(error)
        res.send('Erreur du server');
    }

    next()
}