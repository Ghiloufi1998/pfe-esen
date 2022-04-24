const db = require("../models");
const Reclamation = db.reclamation;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Contenu vide" });
        return;
      }
    
      // Create a Tutorial
      const reclamation = new Reclamation({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
        bureau :req.body.bureau,
        materiels: req.body.materiels,
        etat:req.body.etat ? req.body.etat : false,
        rap: req.body.rap ? req.body.rap : false,
        methode: req.body.methode,
        region: req.body.region,
        repara: req.body.repara ? req.body.repara : false,
        idbur: req.body.idbur
      });
    
      // Save Tutorial in the database
      reclamation.save(reclamation)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erreur! réclamtion non crée."
          });
        });
    };

// Retrieve all Tutorials from the database.

exports.findAll = (req, res) => {
      
  const title = req.query.title
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Reclamation.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erreur! d'affichage des réclamations."
        });
      });
  };
    exports.findAllBybureau = (req, res) => {
      
      const bureau = req.query.bureau
      var condition = bureau ? { bureau: { $regex: new RegExp(bureau), $options: "i" } } : {};

        Reclamation.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Erreur! d'affichage des réclamations."
            });
          });
      };
      exports.findAllBybureauandpublished = (req, res) => {
      
        const bureau = req.query.bureau
        const published=req.query.published
        var condition = {$and: [ bureau ? { bureau: { $regex: new RegExp(bureau), $options: "i" }} : {}, published ? {published}:{}]}
  
          Reclamation.find(condition)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Erreur! d'affichage des réclamations."
              });
            });
        };
        exports.findAllByregionandpublished = (req, res) => {
      
          const region = req.query.region
          const published=req.query.published
          var condition = {$and: [ region ? { region: { $regex: new RegExp(region), $options: "i" }} : {}, published ? {published}:{}]}
    
            Reclamation.find(condition)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Erreur! d'affichage des réclamations."
                });
              });
          };
        exports.findAllBybureauandrepara = (req, res) => {
      
          const bureau = req.query.bureau
          const repara=req.query.repara
          var condition = {$and: [ bureau ? { bureau: { $regex: new RegExp(bureau), $options: "i" }} : {}, repara ? {repara}:{}]}
    
            Reclamation.find(condition)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Erreur! d'affichage des réclamations."
                });
              });
          };
      exports.findAllByregion = (req, res) => {
      
        const region = req.query.region
        var condition = region ? { region: { $regex: new RegExp(region), $options: "i" } } : {};
  
          Reclamation.find(condition)
            .then(data => {
              res.send(data);
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Erreur! d'affichage des réclamations."
              });
            });
        };
  
        exports.findAllByidbur = (req, res) => {
      
          const idbur = req.query.idbur
          var condition = idbur ? { idbur: { $regex: new RegExp(idbur), $options: "i" } } : {};
    
            Reclamation.find(condition)
              .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Erreur! d'affichage des réclamations."
                });
              });
          };
    

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Reclamation.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Pas de réclamtion avec id =" + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Reclamation with id=" + id });
      });
  };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Reclamation.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Reclamation with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Reclamation was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Reclamation with id=" + id
        });
      });
  };


exports.delete = (req, res) => {
    const id = req.params.id;
  
    Reclamation.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Erreur de suppression de réclamtion avec id=${id}. Réclamation non trouvé!`
          });
        } else {
          res.send({
            message: "Réclamation supprimé avec succès!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de suppression de réclamtion avec  id=" + id
        });
      });
  };


exports.deleteAll = (req, res) => {
    Reclamation.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Reclamation were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Reclamations."
        });
      });
  };

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Reclamation.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Reclamations."
        });
      });
  };
  exports.findAllRap = (req, res) => {
    Reclamation.find({ rap: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Reclamations."
        });
      });
  };
  exports.findAllRepara = (req, res) => {
    Reclamation.find({ repara: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Reclamations."
        });
      });
  };
  
 
  
 
 