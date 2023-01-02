//Importation du package Mongoose
const mongoose = require('mongoose');

//Création du shéma de données
const sauceSchema = mongoose.Schema({
    userId: {
        type: String, //type attendu: du Texte
        required: true //Champs obligatoire
    },
    name: {type: String, required: true},
    manufacturer: {type: String, required: true},
    description: {type: String, required : true},
    mainPepper: {type: String, required : true},
    imageUrl: {type: String},
    heat: {type: Number, required : true},
    likes: {type: Number, required : true},
    dislikes: {type: Number, required : true},
    usersLiked: {type: [String], required : true},
    usersDisliked: {type: [String], required : true}
});

//exportation du shema Sauce
module.exports = mongoose.model('sauce', sauceSchema);