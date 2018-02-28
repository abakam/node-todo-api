const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');
    console.log('Todos');
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('All:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Not Completed');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    

    db.collection('Todos').find({_id: new ObjectID("5a8e3d5077b7a103c7f3a04b")}).toArray().then((docs) => {
        console.log('5a8e3d5077b7a103c7f3a04b');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    db.collection('Todos').findById("5a8e3d5077b7a103c7f3a04b").toArray().then((docs) => {
        console.log('Find by ID: 5a8e3d5077b7a103c7f3a04b');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    })

    //db.close();
})