'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  telephone: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  subject: {
    type: String,
    default: '',
    trim: true
  },
  message: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Contact', ContactSchema);

