const db = require("../models");
const Agences = db.agences;

exports.create = (req, res) => {
    
    if (!req.body.title) {
        res.status(400).send({ message: "Nom d'agence ne peut pas être vide" });
        return;
      }
      
      const agences = new Agences({
        title: req.body.title,
        region: req.body.region,
        responsable:req.body.responsable,
        tel: req.body.tel,
        adresse : req.body.adresse,
        email: req.body.email,
        
      });
    
     
      agences.save(agences)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Agence ne peut pas être crée"
          });
        });
    };



    exports.findAll = (req, res) => {
 
        const region = req.query.region;

        var condition = region ? { region: { $regex: new RegExp(region), $options: "i" } } : {};
      
        Agences.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
              err.message || "Erreur! d'affichage des agences."
            });
          });
      };



exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Agences.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Agences with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Agences with id=" + id });
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Contenu ne peut pas être vide"
      });
    }
  
    const id = req.params.id;
  
    Agences.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Erreur de modification d'agence avec id=${id}. agence non trouvé`
          });
        } else res.send({ message: "Agence mis à jour avec succès." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification d'agence avec id=" + id
        });
      });
  };


exports.delete = (req, res) => {
    const id = req.params.id;
  
    Agences.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Pas d'agence avec id=${id}.`
          });
        } else {
          res.send({
            message: "Agence supprimée avec succès"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de suppression d'agence avec id=" + id
        });
      });
  };



exports.deleteAll = (req, res) => {
    Agences.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Agences were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Agencess."
        });
      });
  };


  
 
  
 
 