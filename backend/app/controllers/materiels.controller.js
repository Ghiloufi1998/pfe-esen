const db = require("../models");
const Materiels = db.materiels;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    
      // Create a Tutorial
      const materiels = new Materiels({
        title: req.body.title,
        caracteristiques: req.body.caracteristiques,
        marque: req.body.marque,
        serial: req.body.serial,
        type: req.body.type,
        bureau: req.body.bureau,
        region: req.body.region,
        active: req.body.active ? req.body.active : false,
        idbur: req.body.idbur,
      });
    
      // Save Tutorial in the database
      materiels.save(materiels)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the materiels."
          });
        });
    };

// Retrieve all Tutorials from the database.

    exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
      
        Materiels.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
              err.message || "Erreur! d'affichage des matériels."
            });
          });
      };
      



      exports.findAllbyidbur = (req, res) => {
        const idbur = req.query.idbur;
        var condition = idbur ? { idbur: { $regex: new RegExp(idbur), $options: "i" } } : {};
      
        Materiels.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving materielss."
            });
          });
      };
      exports.findAllbybureauandregion = (req, res) => {
        const title = req.query.title;
        const region = req.query.region;
        var condition = { $and : [title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}, region ? { region : { $regex: new RegExp(region)}}: {}]}
      
        Materiels.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving materielss."
            });
          });
      };


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Materiels.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found materiels with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving materiels with id=" + id });
      });
  };



  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Contenu ne peut pas être vide"
      });
    }
  
    const id = req.params.id;
  
    Materiels.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Erreur de modification du matériel avec id=${id}. Matériel non trouvé`
          });
        } else res.send({ message: "Matériel mis à jour avec succès." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification du modification avec id=" + id
        });
      });
  };




exports.delete = (req, res) => {
    const id = req.params.id;
  
    Materiels.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete materiels with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "materiels was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete materiels with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.

exports.deleteAll = (req, res) => {
    Materiels.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} materiels were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all materielss."
        });
      });
  };

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Materiels.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving materielss."
        });
      });
  };
  
 
  
 
 