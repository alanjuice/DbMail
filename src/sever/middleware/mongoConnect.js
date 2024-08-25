const mongoose = require("mongoose");

const mongoURL = 'your mongo url here';
async function mongoConnect() {
    //connect to mongodb
    const response = await mongoose.connect(mongoURL);
}

module.exports = mongoConnect;
