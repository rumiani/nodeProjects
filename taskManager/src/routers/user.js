const express = require("express");
const router = new express.Router()
const User = require('../models/user')

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/users/signup", async (req, res) => {
    const newUser = new User(req.body);
    try {
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).send();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
  
  // router.delete("/users/:id", async (req, res) => {
  //   const _id = req.params.id;
  //   try {
  //     const user = await User.findByIdAndDelete(_id);
  //     const count = await User.countDocuments({ done: false });
  //     if (!user) return res.status(404).send();
  //     res.status(201).send({ user, count });
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // });
  
  router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const validFields = ["name", "email", "pass"];
    const isValidupdate = updates.every((update) => validFields.includes(update));
    if (!isValidupdate)
      return res.status(400).send({ error: "Invalid update filed" });
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) return res.status(404).send({ error: "User not found!" });
      res.status(201).send(user);
    } catch (err) {
       res.status(500).send(err);
    }
  });
  
  router.delete("/users/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const user = await User.findByIdAndDelete(_id);
      if (!user) return res.status(404).send({ error: "User not found!" });
      res.status(200).send(user);
    } catch (err) {
       res.status(500).send(err);
    }
  });
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email,req.body.pass);
    if (!user) return res.status(404).send();
    res.status(201).send(user);
  } catch (err) {
    res.status(401).send(err);
  }
});
  module.exports = router