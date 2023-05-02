const express = require("express");
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')

router.get("/", (req, res) => {
  res.send('Hi me again')
});
router.get("/users/me",auth, async (req, res) => {
  console.log('1');
  res.send(req.user)
});
router.post("/users/signup", async (req, res) => {
  console.log('sign up');
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
  console.log('logout');
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
const upload = multer({
  // dest: 'avatars', Commented this because we don't want to save the file in filesystem because the servers wipe filesystem everytime we deploy etc
  limits:{
    // limit the size to 1 megabyte
    fileSize: 1000000
  },
  fileFilter(req,file, cb){
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/))
      return cb(new Error('Please upload an image in png or jpeg format'))
    cb(undefined, true) 
  }
})
router.post("/users/me/avatar", auth, upload.single('avatar'), async (req, res) => {
  // req.user.avatar = req.file.buffer
  const buffer =await sharp(req.file.buffer).resize({width: 250, height:250}).png().toBuffer()
  req.user.avatar = buffer

  await req.user.save()
  try {
    res.send('Upload successfull!');
  } catch (err) {
    console.log(err);
      res.status(500).send(err);
  }
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
});
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  try {
    res.send('Avatar was deleted successfully!');
  } catch (err) {
    console.log(err);
      res.status(500).send(err);
  }
}, (error, req, res, next) => {
  console.log(error);
  res.status(400).send({error: error.message})
});
// router.delete("/users/me", auth, async (req, res) => {
//   try {

//     console.log(req.user);
//     await req.user.remove()
//     res.send(req.user);
//   } catch (err) {
//     console.log(err.message);
//       res.status(500).send(err);
//   }
// });
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

router.get('/users/:id/avatar', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if(!user || !user.avatar) throw new Error({error: 'user or avatar not found'})
    res.set('Content-Type', 'image/png')
    res.send(user.avatar)
  } catch (error) {
    
  }
})

module.exports = router