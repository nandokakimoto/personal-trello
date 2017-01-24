'use strict';

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

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

// Pre-save hook to encrypt password
UserSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) throw err;

      user.password = hash;
      next();
    });
  });
});

// Compare user password with candidatePassword
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

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
