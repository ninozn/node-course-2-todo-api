var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://todoapp:551995Zn!@ds149489.mlab.com:49489/todoapp'
};

mongoose.connect( db.localhost || db.mlab);

module.export = {mongoose};