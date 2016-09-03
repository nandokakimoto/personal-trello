'use strict';

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({
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
    type: String
  },
  created_at: Date,
  updated_at: Date
});

UserSchema
  .virtual('user_info')
  .get(function () {
    return { '_id': this._id, 'name': this.username, 'username': this.username };
  });

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
