const mongoose = require('mongoose');
/* reference passport-local-mongoose to make this model usable for managing Users */
const passportLocalMongoose = require('passport-local-mongoose');

const findOrCreate = require('mongoose-findorcreate');

/* create the model schema */
/* username and password are included automatically */
const userSchema = new mongoose.Schema({});

userSchema.plugin(passportLocalMongoose);

userSchema.plugin(findOrCreate);


module.exports = mongoose.model('User', userSchema);