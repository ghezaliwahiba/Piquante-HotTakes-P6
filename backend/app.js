//Importation du package Express
const express = require('express');
//Importation du package Mongoose
const mongoose = require('mongoose');
//Importation de 'Path' afin de définir les chemins
const path = require('path');


const dotenv = require('dotenv');

//Importation des Router 'Sauces' et 'user'
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const helmet = require("helmet");

dotenv.config();

//connection à la base de données avec password + id
mongoose.connect('mongodb+srv://wahiba:Aksil2020@cluster0.3qzpdqp.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  //appel de la méthode Express
const app = express();


//Insertion CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  //pour tranformer les requête en JSON
  app.use(express.json());

  //gestion des routes principales
 /*app.use(cors())*/
app.use(helmet({crossOriginResourcePolicy: false}));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

//exportation de la constante app
module.exports = app;