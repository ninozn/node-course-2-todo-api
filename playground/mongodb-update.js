// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('58973266d2952e64b6e06875')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('588fca5861a0d93d084f6d2c')
    }, {
        $set: {
            name: 'Nino'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    // db.close();
});