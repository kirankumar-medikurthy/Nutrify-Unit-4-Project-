function authorize(permissionRoles) {
    return (req, res, next) => {

        // check if at least one role of that user matches with permissionRoles
        let allowed = false
        req.user.roles.map(role => {
            if (permissionRoles.includes(role)) {
                allowed = true
            }
        })

        // if not then throw an error
        if (!allowed) return res.status(403).send({ message: "You are not allowed to access this page." });

        // if yes then he is allowed
        return next();
    }
}

module.exports = authorize;