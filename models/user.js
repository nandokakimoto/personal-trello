'use strict';

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: Date,
  updated_at: Date
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
