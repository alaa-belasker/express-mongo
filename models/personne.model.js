

var personne = require('../routes/personne')
module.exports = function(){
    
    var db = require('../db/db')();
    
    var Schema = require('mongoose').Schema;

    var personne = Schema({
        nom: String,
        prenom: String,
        adresse: String,
        status: Boolean
    });

    return db.model('personne', personne);

}

