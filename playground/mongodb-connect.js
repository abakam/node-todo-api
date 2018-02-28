const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').insertOne({
        name: 'Ab Akam',
        age: 26, 
        location: 'Lagos'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

//     db.collection('Todos').insertOne({
//         text: 'How to do', 
//         completed: false
//     }, (err, result) => { 
//         if(err) 
//         { return console.log('Unable to insert todo', err);
//     } 
//     console.log(JSON.stringify(result.ops, undefined, 2)); 
// });

    db.close();
});