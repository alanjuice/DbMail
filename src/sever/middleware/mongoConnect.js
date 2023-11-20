const mongoose = require("mongoose");

const mongoURL = 'mongodb://alanjose2025:alan2003@ac-hyowbse-shard-00-00.2y09nal.mongodb.net:27017,ac-hyowbse-shard-00-01.2y09nal.mongodb.net:27017,ac-hyowbse-shard-00-02.2y09nal.mongodb.net:27017/?ssl=true&replicaSet=atlas-13u53v-shard-0&authSource=admin&retryWrites=true&w=majority';
async function mongoConnect() {
    //connect to mongodb
    const response = await mongoose.connect(mongoURL);
}

module.exports = mongoConnect;
