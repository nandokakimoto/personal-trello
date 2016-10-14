'use strict';

var mongoose = require("mongoose");

// Connecto to the database
module.exports = app => {
  mongoose.connect(app.get('mongo_url'), (err, res) => {
    if (err) {
      console.log('ERROR connecting to: ' + app.get('mongo_url') + '. ' + err);
    } else {
      console.log('Succeeded connected to: ' + app.get('mongo_url'));
    }
  });
};
