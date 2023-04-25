const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.envPORT || 3000

app.listen(port, ()=>{
    console.log('server is running on port '+ port);
})
app.use(express.json())

// app.post('/users', async (req, res) => {
//     const newUser = new User(req.body)
//     console.log(newUser);
//     try {
//         const savedUser = await newUser.save()
//         res.status(201).send(savedUser)
//     } catch (err) {
//         res.status(400).send(err)
//     }
// })
app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body)
    try {
        const savedTask = await newTask.save()
        res.status(201).send(savedTask)
    } catch (err) {
        res.status(400).send(err)
    }
})
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(201).send(tasks)
    } catch (err) {
        res.status(400).send(err)
    }
})
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task)return res.status(404).send()
        res.status(201).send(task)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findByIdAndDelete(_id)
        const count = await Task.countDocuments({done: false})
        if(!task)return res.status(404).send()
            res.status(201).send({task,count})
    } catch (err) {
        res.status(500).send(err)   
    }
})