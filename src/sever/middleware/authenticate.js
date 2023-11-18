const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    const token = req.get("x-jwtoken");
    try {
        const payload = jwt.verify(token, "pkey");
        res.user = payload;
        next();
    } catch (error) {
        res.json({ msg: "Invalid token" })
    }
}

module.exports = authenticate;