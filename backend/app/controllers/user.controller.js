exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.gestadBoard = (req, res) => {
    res.status(200).send("Gestionnaire administration regionale.");
  };
  
  exports.gestacBoard = (req, res) => {
    res.status(200).send("Gestionnaire administration centrale.");
  };
  
  exports.gestrBoard = (req, res) => {
    res.status(200).send("Gestionnaire agence régionale .");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Administateur.");
  };