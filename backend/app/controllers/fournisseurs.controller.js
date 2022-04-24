const db = require("../models");
const Fournisseurs = db.fournisseurs;

exports.create = (req, res) => {
    
    if (!req.body.matfisc) {
        res.status(400).send({ message: "Voulez vous insérer le matricule fiscale du fournisseur" });
        return;
      }
    
      
      const fournisseurs = new Fournisseurs({
        title: req.body.title,
        adresse: req.body.adresse,
        matfisc: req.body.matfisc,
        tel: req.body.tel,
        responsable: req.body.responsable,
        email: req.body.email,
                
      });
    
     
      fournisseurs.save(fournisseurs)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erreur lors de la création du Fournisseur."
          });
        });
    };



    exports.findAll = (req, res) => {
       
        const region = req.query.region
      
        var condition = region ? { region: { $regex: new RegExp(region), $options: "i" } } : {};
      
        Fournisseurs.find(condition)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving Fournisseurss."
            });
          });
      };



exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Fournisseurs.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Fournisseurs with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Fournisseurs with id=" + id });
      });
  };

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Contenu ne peux pas être vide!"
      });
    }
  
    const id = req.params.id;
  
    Fournisseurs.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Erreur lors de la modification du fournisseur avec id=${id}. Fournisseur non trouvé `
          });
        } else res.send({ message: "Fournisseurs modifié avec succès." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification du fournisseur avec id=" + id
        });
      });
  };


exports.delete = (req, res) => {
    const id = req.params.id;
  
    Fournisseurs.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: ` id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Fournisseurs was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fournisseurs with id=" + id
        });
      });
  };



exports.deleteAll = (req, res) => {
    Fournisseurs.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Fournisseurs were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Fournisseurss."
        });
      });
  };


  
 
  
 
 