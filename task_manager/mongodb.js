const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectURL = 'mongodb://127.0.0.1:27017/'
const databaseName = 'nodeTest'
MongoClient.connect(connectURL, {useNewUrlParser: true}, (err, client)=>{
    if(err) return console.log("Error: ",err);
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'rumi',
        age:32
    })
})