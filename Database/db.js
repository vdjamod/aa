const mongoose = require('mongoose')
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
// const mongoURL = "mongodb://localhost:27017/SIH";

// Set up MongoDB connection
mongoose.connect(mongoURL)

const db = mongoose.connection;
module.exports = db;