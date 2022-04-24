const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    nom: String,
    cin: Number,
    prenom: String,
    adresse: String,
    email: String,
    password: String,
    Bureau: String,
    region: String,
    idbur: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;