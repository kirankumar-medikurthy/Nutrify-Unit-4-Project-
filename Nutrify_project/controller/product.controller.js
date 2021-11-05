const express = require('express');

const productModel = require('../models/product.model');

const authenticate = require("../middlewars/authenticate.middlewar");

const authorize = require("../middlewars/authorize.middlewar");

const router = express.Router();

// CRUD OPERATION FOR THE PRODUCT CONTROLLER ARE DECLARED BELOW

router.get('', authenticate, authorize(["user", "admin"]), async(req, res) => {
    const product = await productModel.find({}).lean().exec();
    const user = req.user
    return res.status(200).send({ product, user });
})

router.post('', authenticate, authorize(["seller", "admin"]), async(req, res) => {
    const product = await productModel.create(req.body);

    return res.status(201).send(product);
})


router.patch('/:id', authenticate, authorize(["user", "admin"]), async(req, res) => {
    const product = await productModel.findByIdAndUpdate(req.params.id).lean().exec();

    return res.status(200).send(product);
})


router.delete('/:id', authenticate, authorize(["seller", "admin"]), async(req, res) => {
    const product = await productModel.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(product);
})


module.exports = router;