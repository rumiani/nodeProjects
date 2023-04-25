const mongoose = require('mongoose')
const validator = require("validator")

const User = mongoose.model('User', {
    name: {
        type: String,
        trim:true
    },
    email: {
        type: String,
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
    }
})

module.exports = User