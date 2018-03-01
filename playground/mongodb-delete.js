const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // 
    
    //deleteMany - users
    // db.collection('Users').deleteMany({name: 'Abraham'}).then((result) => {
    //     console.log(result.result);

    //deleteOne - users
    // db.collection('Users').deleteOne({location: 'Lagos'}).then((result) => {
    //     console.log(result.result);
    // });

    //findOneAndDelete - users
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a974a87a989f683083fc225')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    })
    //db.close();
})