const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require("validator")
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim:true
    },
    email: {
        type: String,
        unique:true,
        required: true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error('Invalid emial')
        }
    },
    pass:{
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(value.length <= 6)
                throw new Error('Short password')
            if(value.toLowerCase().includes('password'))
                throw new Error('The password should not contain the word: "password"')
        }    
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
},{
    timestamps: true
})

userSchema.virtual('usertasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.pass
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id:user._id.toString()}, "sometext")
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, pass) =>{
    const user = await User.findOne({email})
    if(!user) {throw new Error('Invalid email or password')}
    const isMatch = await bcrypt.compare(pass,user.pass)
    if(!isMatch) throw new Error('Invalid email or password')
    return user
}

userSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('pass')){
        user.pass = await bcrypt.hash(user.pass, 8)
    }
    next()
})

userSchema.pre('remove', async function (next) {
    const user = this;
     await Task.deleteMany({owner: user._id})
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User