const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.reclamation = require("../models/reclamation.model")(mongoose);
db.agences = require("../models/agences.model")(mongoose);
db.materiels = require("../models/materiels.model")(mongoose);
db.fournisseurs = require("../models/fournisseurs.model")(mongoose);

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["gestr", "gestad", "gestac","admin"];

module.exports = db;