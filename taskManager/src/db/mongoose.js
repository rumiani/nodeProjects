const mongoose = require('mongoose')
// in mongoose we specify the db name in the URL
const url = 'mongodb://127.0.0.1:27017/taskmanager'
mongoose.connect(url, {useNewUrlParser: true})
    .then(() => {
        console.log('connected to db');
    }).catch(err => console.log('err',err))