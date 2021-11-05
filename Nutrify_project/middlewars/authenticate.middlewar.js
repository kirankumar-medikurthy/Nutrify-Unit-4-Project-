const jwt = require('jsonwebtoken');

require('dotenv').config();

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, user) {
            if (err) return reject(err);

            return resolve(user);
        })
    })
}


async function authenticate(req, res, next) {
    // check we hava received bearer token in the header;
    const bearerToken = req.headers.authorization;
    // if not we will throw an error
    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
        return res.status(403).send({ status: "failed", message: "Invalid bearer token" });
    }
    //else we will extract the user from the token;
    const token = bearerToken.split(" ")[1];
    try {

        //if user is not found we will throw an error
        const { user } = await verifyToken(token);

        console.log(user);
        //else will attach user to the requset;
        req.user = user;
        // return next;
        return next();

    } catch (err) {
        return res.status(403).send({ status: "failed", message: err.message })
    }

}


module.exports = authenticate;