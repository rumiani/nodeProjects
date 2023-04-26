const express = require("express");
require("./db/mongoose");
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express();
const port = process.envPORT || 3000;

app.use(express.json());


app.listen(port, () => {
  console.log("server is running on port " + port);
});

app.use(taskRouter)
app.use(userRouter)

const jwt = require('jsonwebtoken')
// const myFunc = async () =>{
//   const token = jwt.sign({_id: '123'}, 'aaa')
//   console.log(token);
//   const data = jwt.verify(token, 'aaa')
//   console.log(data);
// }
// myFunc()