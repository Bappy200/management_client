const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const colors = require('colors');
const schema = require('./schema/schema.js')
const PORT = process.env.PORT || 5000;
const app = express();
const mongoDbConnect = require('./config/db')

//connect database
mongoDbConnect();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))



app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})