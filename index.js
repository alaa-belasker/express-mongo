
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');




var app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var personne = require('./routes/personne')
app.use('/personne', personne)

var server = {
    port: 8083
  };
  
  app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));





