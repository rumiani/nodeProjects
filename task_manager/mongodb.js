// const express = require("express");
// const mongoose = require('mongoose')
// const app = express()

// const dbURI = 'mongodb+srv://rumi:GxSiV7QXO1EhLC1f@blog.pzttybm.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => {
//         app.listen(3000, () => console.log('server is up on port 3000'))
//         console.log('Connected to db')})
//         .catch(err => {
//             console.log('DataBase error: ',err)})


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const { MongoClient } = require('mongodb');
const connectURL = 'mongodb://localhost:27017'
const databaseName = 'taskManager'
MongoClient.connect(connectURL, {useNewUrlParser: true}, (err, client)=>{
    console.log('Testing:');
    if(err) 
        return console.log("Error: ",err);
    // const db = client.db(databaseName)
    console.log('DB is connected!');
})