//Importation du router d'Express
const express = require('express');
const router = express.Router();
//importation des controllers
const sauceCtrl = require('../controllers/sauce');
//importation des Middleware 'auth' et 'Multer'
const auth = require('../middleware/auth');
//importation du middelware Multer
const multer = require('../middleware/multer-config');

//Définition des Router
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/:id/like', auth, sauceCtrl.createLike);

//exportation des router
module.exports = router;