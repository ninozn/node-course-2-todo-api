const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
//
// var id = '58977793531e3760c807574511';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

var id = '5897594c0bcf4f22d4315b94';

User.findById(id).then((user) => {
    if(!user){
        return console.log('id not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));