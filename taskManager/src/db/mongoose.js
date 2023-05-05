const mongoose = require('mongoose')
// in mongoose we specify the db name in the URL

mongoose.connect(process.env.LOCAL_MONGO_URL, {useNewUrlParser: true})
    // .then(() => {
    //     console.log('connected to db');
    // }).catch(err => console.log('err',err))