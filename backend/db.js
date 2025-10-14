// imports + dotenv loading
require('dotenv').config();

const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_URL;

// connects to mongoDB
async function connectMongoose() {
    try {
        await mongoose.connect(mongoDB);
        console.log(`Mongoose fully connected`);
    } catch(err) {
        console.error("Mongoose Failure: ", err);
        process.exit(1);
    }
}

// exports connectMongoose() for importing to other files
module.exports = connectMongoose;