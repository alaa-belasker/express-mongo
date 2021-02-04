
var MongoClient=require("mongodb").MongoClient;



    const mongoose = require('mongoose');

    let db;
    
    module.exports = function connection(){
        if(!db){
            db = mongoose.createConnection('mongodb://localhost/personne', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        }
    
        return db;
    }
   

       