const mongoose = require("mongoose");

module.exports = mongoose.model("Mail", new mongoose.Schema(
    {
        from: { type: String, required: true },
        to: { type: String, required: true },
        body: { type: String, required: true },
        subject: { type: String, required: true },
    }
));