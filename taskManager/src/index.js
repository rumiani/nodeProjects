const express = require("express");
require("./db/mongoose");
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.listen(port, () => {
  console.log("server is running on port " + port);
});
// app.use((req, res)=> res.status(503).send('Under maintenance. come back later'))
app.use(taskRouter)
app.use(userRouter)

// const jwt = require('jsonwebtoken')
// const myFunc = async () =>{
//   const token = jwt.sign({_id: '123'}, 'aaa')
//   console.log(token);
//   const data = jwt.verify(token, 'aaa')
//   console.log(data);
// }
// myFunc()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () =>{
//   // const task = await Task.findById('64506ec28dfe287b63b8d6e8')
//   // await task.populate('owner')
//   // console.log(task);
//   const user = await User.findById('64500f399a4c4ab794566e66')
//   await user.populate('usertasks')
//   console.log(user.usertasks);

// }
// main()