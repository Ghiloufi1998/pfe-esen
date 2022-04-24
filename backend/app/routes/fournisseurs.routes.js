module.exports = app => {
    const fournisseurs = require("../controllers/fournisseurs.controller");
  
    var router = require("express").Router();
  
    // Create a new fournisseurs
    router.post("/", fournisseurs.create);
  
    // Retrieve all fournisseurs
    router.get("/", fournisseurs.findAll);
  
    // Retrieve all published fournisseurs
   
  
    // Retrieve a single fournisseurs with id
    router.get("/:id", fournisseurs.findOne);    
  
    // Update a fournisseurs with id
    router.put("/:id", fournisseurs.update);
  
    // Delete a fournisseurs with id
    router.delete("/:id", fournisseurs.delete);
  
    // Create a new fournisseurs
    router.delete("/", fournisseurs.deleteAll);
  
    app.use('/api/fournisseurs', router);
  };