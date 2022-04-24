module.exports = app => {
    const agences = require("../controllers/agences.controller");
  
    var router = require("express").Router();
  
    // Create a new agences
    router.post("/", agences.create);
  
    // Retrieve all agences
    router.get("/", agences.findAll);
  
    // Retrieve all published agences
   
  
    // Retrieve a single agences with id
    router.get("/:id", agences.findOne);    
  
    // Update a agences with id
    router.put("/:id", agences.update);
  
    // Delete a agences with id
    router.delete("/:id", agences.delete);
  
    // Create a new agences
    router.delete("/", agences.deleteAll);
  
    app.use('/api/agences', router);
  };