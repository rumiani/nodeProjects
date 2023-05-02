const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
    des:{
        type:String,
        required: true
    },
    done:{
        type: Boolean,
        default:false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
})

taskSchema.pre('save', async function (next) {
    console.log('pre in schema file');
    const task = this;
    if(task.isModified('pass')){
        task.pass = await bcrypt.hash(task.pass, 8)
    }
    next()
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task