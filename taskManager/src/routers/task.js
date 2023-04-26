const express = require("express");
const router = new express.Router()
const Task = require('../models/task')

router.post("/tasks", async (req, res) => {
    const newTask = new Task(req.body);
    try {
      const savedTask = await newTask.save();
      res.status(201).send(savedTask);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(201).send(tasks);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const task = await Task.findById(_id);
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
  
router.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const validFields = ["des", "done"];
  const isValidupdate = updates.every((update) => validFields.includes(update));
  if (!isValidupdate)
    return res.status(400).send({ error: "Invalid update filed" });
  try {
    const task = await Task.findById(req.params.id)
    updates.forEach(update => task[update] = req.body[update])
    await task.save()
    if (!task) return res.status(404).send({ error: "Task not found!" });
    res.status(201).send(task);
  } catch (err) {
      res.status(500).send(err);
  }
});
  
  router.delete("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const task = await Task.findByIdAndDelete(_id);
      if (!task) return res.status(404).send({ error: "Task not found!" });
      res.status(200).send(task);
    } catch (err) {
       res.status(500).send(err);
    }
  });
  module.exports = router