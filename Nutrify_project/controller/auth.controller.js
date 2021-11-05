const jwt = require('jsonwebtoken');

require("dotenv").config();

const userModel = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register = async(req, res) => {
    let user;
    try {
        user = await userModel.findOne({ email: req.body.email });
        // step1 : we will check if the email already exists or not
        if (user) {
            // step2 : if email already exists, we will throw an error of email already exists
            return res.status(400).send({ message: 'Email and password already exists' })
        }

        // step3 : email doesn't exists, we will create the email and password to users
        //step4 : Before storing data into the database, we will hash the password;
        user = await userModel.create(req.body);

        // step5 : we will create a token for the user
        const token = newToken(user);

        //step6 : we will send the token to the frontend
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ status: "failed", message: err.message })
    }
}

const login = async(req, res) => {

    let user;
    try {

        //step1:- we will wether the email exists or not, if email exist we will allow users  

        user = await userModel.findOne({ email: req.body.email });

        //step2 :- if email doesn't exist, then we will throw an errors

        if (!user) {
            return res.status(403).send({ status: "failed", message: "Please check your email and password" })
        }

        //step3:- if user exist we will match passwords

        let match = user.checkPassword(req.body.password);

        //step4:- if doesn't match passwords, we will throw an error
        if (!match) {
            return res.status(403).send({ status: "failed", message: "Please check your email and password" })
        }

        //step5:- we will create token for that user;

        const token = newToken(user);

        //step6:- we will send the token to the frontend
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ status: "failed", message: "Sorry! Something went wrong" })
    }
}


module.exports = { register, login, newToken };