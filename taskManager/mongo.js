// const {MongoClient, ObjectId} = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017'
// const dbName = 'tm'
// // 1
// MongoClient.connect(url)
//     .then ((client) => {
//         const db = client.db(dbName);
//         db.collection('users')
//             .updateMany({done: true}, {$set:{done: false}})
//             .then(user => console.log(user))
//     })
//     .catch(err => console.log('unable to connect'))
// // 2
// // async function connectToMongoDB() {
// //     try {
// //       const client = await MongoClient.connect(url);
// //       console.log('Connected to MongoDB');
// //       // perform database operations here
// //       console.log('Disconnected from MongoDB');
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   }
  
// //   connectToMongoDB();
  
  
  
  
  
  

// // MongoClient.connect(url, (err, client) => {
// //     if (err) {
// //         console.log('Error connecting to MongoDB:', err);
// //         return;
// //     }

// //     console.log('Connected to database');

// //     // Perform database operations here...

// //     client.close();
// // });
  