module.exports = app => {
    const materiels = require("../controllers/materiels.controller");
  
    var router = require("express").Router();
  
    // Create a new materiels
    router.post("/", materiels.create);
  
    // Retrieve all materiels
    router.get("/", materiels.findAll);
  
    // Retrieve all published materiels
    router.get("/published", materiels.findAllPublished);

    router.get("/burreg", materiels.findAllbybureauandregion);

    
    router.get("/bur", materiels.findAllbyidbur);
  
    // Retrieve a single materiels with id
    router.get("/:id", materiels.findOne);    
  
    // Update a materiels with id
    router.put("/:id", materiels.update);
  
    // Delete a materiels with id
    router.delete("/:id", materiels.delete);
  
    // Create a new materiels
    router.delete("/", materiels.deleteAll);
  
    app.use('/api/materiels', router);
  };