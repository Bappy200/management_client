const mongooes = require('mongoose');
require('dotenv').config();
const colors = require('colors');

const mongoDbConnect = async()=>{
    const connect = await mongooes.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${connect.connection.host}`.cyan.bgGreen);
}

module.exports = mongoDbConnect;