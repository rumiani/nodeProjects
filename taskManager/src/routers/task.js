const express = require("express");
const router = new express.Router()
const Task = require('../models/task')
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

router.post("/tasks", auth, async (req, res) => {
  console.log('router');
    // const newTask = new Task(req.body);
    const task = new Task({...req.body, owner:req.user._id})
    try {
      await task.save();
      res.status(201).send(task);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
router.get("/tasks", auth, async (req, res) => {
  const match = {}
  const sort = {}

  if(req.query.done) match.done = req.query.done === 'true'
  if(req.query.sort){
    const parts = req.query.splitBy(':')
    sort[parts[0]] = parts[1] === 'desc'? -1 : 1
  }
  try {
    await req.user.populate({
      path:'usertasks',
      match,
      options:{
        limit:parseInt(req.query.limit),
        skip:parseInt(req.query.skip),
        sort
      }
    })
    res.status(201).send(req.user.tasks);
  } catch (err) {
    res.status(400).send(err);
  }
});
  router.get("/tasks/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {

      const task = await Task.findOne({_id, owner: req.user._id});
      if (!task) return res.status(404).send();
      res.status(201).send(task);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // router.delete("/tasks/:id", async (req, res) => {
  //   const _id = req.params.id;
  //   try {
  //     const task = await Task.findByIdAndDelete(_id);
  //     const count = await Task.countDocuments({ done: false });
  //     if (!task) return res.status(404).send();
  //     res.status(201).send({ task, count });
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // });
  
router.patch("/tasks/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const validFields = ["des", "done"];
  const isValidupdate = updates.every((update) => validFields.includes(update));
  if (!isValidupdate)
    return res.status(400).send({ error: "Invalid update filed" });
  try {
    const task = await Task.findOne({_id, owner:req.params.id})
    if (!task) return res.status(404).send({ error: "Task not found!" });
    updates.forEach(update => task[update] = req.body[update])
    await task.save()
    res.status(201).send(task);
  } catch (err) {
      res.status(500).send(err);
  }
});
  
router.delete("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findOneAndDelete({_id, owner: req.user._id});
    if (!task) return res.status(404).send({ error: "Task not found!" });
    res.status(200).send(task);
  } catch (err) {
      res.status(500).send(err);
  }
});
module.exports = router