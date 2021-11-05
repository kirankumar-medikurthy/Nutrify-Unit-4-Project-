const express = require('express');

require('dotenv').config();

const connect = require("../configs/db");

const passport = require("../configs/passport.configs");

const userController = require("../controller/user.controller");

const productController = require("../controller/product.controller");

const { register, login, newToken } = require("../controller/auth.controller");

const categoryController = require("../controller/category.controller");

const problemsController = require("../controller/problem.controller");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use(passport.initialize());

app.use("/users", userController);

app.use("/products", productController);

app.post("/register", register);

app.post("/login", login);

app.use("/categorys",categoryController);

app.use("/problems",problemsController);

passport.serializeUser(function({ user, token }, done) {
    done(null, { user, token });
});

passport.deserializeUser(function(id, done) {
    done(err, { user, token });
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }),
    function(req, res) {
        const { user, token } = req.user;
        return res.status(200).json({ user, token });
    });

const start = async() => {
    await connect();

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
}

module.exports = start;