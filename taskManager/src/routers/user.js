const express = require("express");
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')


router.get("/users/me",auth, async (req, res) => {
  res.send(req.user)
});
router.post("/users/signup", async (req, res) => {
    const user = new User(req.body);
    try {
      // const alreadyExist = await User.findOne({email: req.body.email})
      // if(alreadyExist) throw new Error("The email already was used.")
      await user.save();
      const token = await user.generateAuthToken()
      res.status(201).send({user, token});
    } catch (err) {
      res.status(400).send({error:err.message});
    }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter( token => token.token !== req.token)
    await req.user.save();
    res.send('You are logged out cusseccfully.')
  } catch (err) {
    res.status(500).send({error:err.message});
  }
});
router.post("/users/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = []
    await req.user.save();
    res.send('You are logged out all the sessions.')
  } catch (err) {
    res.status(500).send({error:err.message});
  }
});
  
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const validFields = ["name", "email", "pass"];
  const isValidupdate = updates.every((update) => validFields.includes(update));
  if (!isValidupdate)
    return res.status(400).send({ error: "Invalid update filed" });
  try {
    updates.forEach(update => req.user[update] = req.body[update])
    await req.user.save()
    res.send(req.user);
  } catch (err) {
      res.status(500).send(err);
  }
});
  
router.delete("/users/me", auth, async (req, res) => {
  try {

    console.log(req.user);
    await req.user.remove()
    res.send(req.user);
  } catch (err) {
    console.log(err.message);
      res.status(500).send(err);
  }
});
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email,req.body.pass);
    const token = await user.generateAuthToken()
    if (!user) return res.status(404).send();
    res.send({user,token});
  } catch (err) {
    res.status(401).send(err);
  }
});
  module.exports = router