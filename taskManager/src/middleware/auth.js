const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'sometext')
        const user = await User.findOne({_id: decoded._id, 'tokens.token':token})
        if(!user) throw new Error()
        req.token = token
        req.user = user
        // req.user.remove()
        next()
    } catch (err) {
        console.log(err.message);
        res.status(401).send({error: 'Please authonticate'})
    }
}
module.exports = auth