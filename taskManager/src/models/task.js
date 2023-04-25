const mongoose = require('mongoose')
const validator = require("validator")

const Task = mongoose.model('Task', {
    des:{
        type:String,
        required: true
    },
    done:{
        type: Boolean,
        default:false
    }
})
module.exports = Task