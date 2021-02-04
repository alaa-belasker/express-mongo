const model = require('../models/personne.model')();

var personneController = function () { }

personneController.show = function (req, res, next) {

    model.find({}, (err, result) => {
        if (err) { console.log(err); }
        res.json({
            status: 200,
            result,
            message: "Person list retrieved successfully"
        })
       

    });
}

personneController.get = function (req, res, next) {

    model.findOne({_id : req.params.id}, (err, result) => {
        if (err) { console.log(err); }
        res.json({
            status: 200,
            result,
            message: "Person selected successfully"
        })
       
    });
}

personneController.update = function (req, res) {
    var body = req.body;

    model.updateOne({ _id: req.params.id }, {
        $set: {
            nom: body.nom,
            prenom :body.prenom,
            adresse:body.adresse
        }
    }, { multi: true }, (error, result) => {
        if (error)
            throw error;
       
        res.json({
            status: 200,
            result,
            message: "person updated successfully"
        })
    });
}

personneController.delete = function (req, res) {

    let id = req.params.id;
    model.deleteOne({ _id: id }, (err, result) => {
        if (err) { console.log(err); }
        res.json({
            status: 200,
            result,
            message: " person deleted successfully"
        });
    });

}

personneController.save = function (req, res) {

    if (!req.params.id) {
        var body = req.body;
        body.status = false;
    
        model.create(body, (err, result) => {
            if (err) { console.log(err); }
            // res.redirect('/employes/');
            res.json({
                status: 200,
                message: "New person added successfully"
            })
        });
    
      
    }else{
        throw new Error('should not have an id')
    }
}
module.exports = personneController;