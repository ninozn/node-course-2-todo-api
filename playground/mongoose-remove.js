const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
//

Todo.findOneAndRemove({_id: '58a0bc9f345a2e6432efd35a'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('58a0bc9f345a2e6432efd35a').then((todo) => {
     console.log(todo);
});