const express = require('express');

const userModel = require('../models/user.model');

const router = express.Router();


router.get("", async(req, res) => {
    const user = await userModel.find({}).lean().exec();

    return res.status(200).send(user);
})

// CRUD OPERATION FOR THE USERS CONTROLLER ARE DECLARED BELOW

router.post("", async(req, res) => {
    const user = await userModel.create(req.body);

    return res.status(201).send(user);
})

router.patch("/:id", async(req, res) => {
    const user = await userModel.findByIdAndUpdate(req.params.id).lean().exec();

    return res.status(200).send(user);

})

router.delete("/:id", async(req, res) => {
    const user = await userModel.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(user);
})

module.exports = router;