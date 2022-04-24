const db = require("../models");
const User = db.user;



exports.findAll = (req, res) => {
    const region = req.query.region;
    var condition = region ? { region: { $regex: new RegExp(region), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };



  exports.findAllwithregionandbur = (req, res) => {
    
    const idbur = req.query.idbur;
    var condition = idbur ? { idbur: { $regex: new RegExp(idbur), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };

exports.findOne = (req, res) => {
const id = req.params.id;

User.findById(id)
  .then(data => {
    if (!data)
      res.status(404).send({ message: "Not found User with id " + id });
    else res.send(data);
  })
  .catch(err => {
    res
      .status(500)
      .send({ message: "Error retrieving User with id=" + id });
  });
};

exports.update = (req, res) => {
if (!req.body) {
  return res.status(400).send({
    message: "Contenu vide ! Erreur"
  });
}

const id = req.params.id;

User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Erreur de mis à jour d'utilisateur avec id=${id}. utilisateur non trouvé`
      });
    } else res.send({ message: "Utilisateur modifié avec succès" });
  })
  .catch(err => {
    res.status(500).send({
      message: "Erreur de modification d'utilisateur avec id=" + id
    });
  });
};


exports.delete = (req, res) => {
const id = req.params.id;

User.findByIdAndRemove(id)
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete User with id=${id}. Maybe user was not found!`
      });
    } else {
      res.send({
        message: "User was deleted successfully!"
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete User with id=" + id
    });
  });
};


exports.deleteAll = (req, res) => {
User.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} User were deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all users."
    });
  });
};