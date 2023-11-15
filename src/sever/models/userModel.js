const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
));
