const mongoose = require("mongoose");

module.exports = mongoose.model("Mail", new mongoose.Schema(
    {
        from: { type: mongoose.Types.ObjectId, required: true },
        to: { type: mongoose.Types.ObjectId, required: true },
        fromMail: { type: String, required: true },
        body: { type: String, required: true },
        subject: { type: String, required: true },
        seenByReciever: { type: Boolean }
    }
));