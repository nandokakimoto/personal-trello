'use strict';

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = mongoose.Schema({ // eslint-disable-line new-cap
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
  created_at: Date, // eslint-disable-line camelcase
  updated_at: Date  // eslint-disable-line camelcase
});

// Sets user_info virtual attribute to use in session.
UserSchema
  .virtual('user_info')
  .get(function() {
    return {_id: this._id, name: this.name, username: this.username};
  });

// Validation for user already in use.
var usernameTaken = (value, cb) => {
  mongoose.models.User.findOne({username: value}, function(err, user) {
    if (err) throw err;
    if (user) return cb(false);
    cb(true);
  });
};
UserSchema.path('username').validate(usernameTaken,
  'The specified email address is already in use.');

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
