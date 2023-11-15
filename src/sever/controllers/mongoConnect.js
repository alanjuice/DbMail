const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://alanjose2025:alan2003@cluster0.2y09nal.mongodb.net/?retryWrites=true&w=majority";
async function mongoConnect() {
    const response = await mongoose.connect(mongoURL);
}

module.exports = mongoConnect;
