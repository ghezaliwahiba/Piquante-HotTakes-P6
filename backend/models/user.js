
//importation du package Mongoose
const mongoose = require('mongoose');

//importation du package Mongoose-unique-validator
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { 
    type: String, //type attendu: du Texte
    required: true, //Champs obligatoire
    unique: true //impossibilité de se s'incrire 2 fois avec la même adresse email
  },
  password: { 
    type: String, //type attendu: du Texte
    required: true //Champs obligatoire
   }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);