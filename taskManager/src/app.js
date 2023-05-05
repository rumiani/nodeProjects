const express = require("express");
require("./db/mongoose");
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express();

app.use(express.json());


// app.use((req, res)=> res.status(503).send('Under maintenance. come back later'))
app.use(taskRouter)
app.use(userRouter)

module.exports = app