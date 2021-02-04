const express = require('express');
const router = express.Router();


var personneController = require('../controllers/personne.controller');

router.get('/', personneController.show);

router.post('/add', personneController.save);

router.get('/select/:id', personneController.get);

router.put('/update/:id', personneController.update);

router.delete('/delete/:id', personneController.delete);

module.exports = router;