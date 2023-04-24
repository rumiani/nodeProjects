const express = require("express");
const {ObjectId} = require("mongodb");
const {connectToDb, getDb} = require('./db')
const app = express()
app.use(express.json())

// const dbURI = 'mongodb+srv://rumi:GxSiV7QXO1EhLC1f@blog.pzttybm.mongodb.net/?retryWrites=true&w=majority'

let db;
connectToDb ((err) =>{
    if(!err){
        app.listen(3000, ()=>{
            console.log('app is listenning on port 3000');
        })
        db = getDb()
    }
})

app.get('/users', (req, res) =>{
    const page = req.query.p || 0;
    const userPerPage = 3;
    let users= [];

    db.collection('users')
    .find()
    .skip(page * userPerPage)
    .limit(userPerPage)
    .forEach(user => {
        users.push(user)})
        .then( () =>{
            res.status(200).json(users)
        })
        .catch( err => {
            res.status(500).json({err:"could not fetch the documents"})
        })
    })
app.get('/users/:id', (req, res) =>{
    if(ObjectId.isValid(req.params.id)){

        db.collection('users')
        .findOne({_id: new ObjectId(req.params.id)})
            .then( (user) => {
                if(user === null) throw 'User Not Found!'
                res.status(200).json(user)})
            .catch( err =>res.status(500).json({err:'Could not fetch the document'}))
    }
    else res.status(500).json({err:'User with this id not found'})
})

app.post('/users', (req, res) =>{
    const newUser = req.body
    console.log("newUser",newUser);
    db.collection('users')
        .insertOne(newUser)
            .then( (result) => {
                res.status(201).json(result)})
            .catch( err =>res.status(500).json({err:'Could not connect to the server'}))
})

app.delete('/users/:id', (req, res) =>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('users')
        .deleteOne({_id: new ObjectId(req.params.id)})
            .then( (result) => {
                res.status(200).json(result)})
            .catch( err =>res.status(500).json({err:'Could not delete the document'}))
    }
    else res.status(500).json({err:'User with this id not found'})
})
app.put('/users/:id', (req, res) =>{
    const updateUser = req.body
    if(ObjectId.isValid(req.params.id)){
        db.collection('users')
        .updateOne({_id: new ObjectId(req.params.id)},{$set:updateUser})
            .then( (result) => {
                res.status(200).json(result)})
            .catch( err =>res.status(500).json({err:'Could not delete the document'}))
    }
    else res.status(500).json({err:'User with this id not found'})
})