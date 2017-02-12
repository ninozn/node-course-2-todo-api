var mongoose = require('mongoose');
var config = require('./../config/config.js');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

module.export = {mongoose};