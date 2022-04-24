module.exports = app => {
    const reclamation = require("../controllers/reclamation.controller");
  
    var router = require("express").Router();
  
    // Create a new reclamation
    router.post("/", reclamation.create);
  
    // Retrieve all reclamation
    router.get("/bur", reclamation.findAllBybureau);

    router.get("/reg", reclamation.findAllByregion);

    
    router.get("/", reclamation.findAll);
  
    // Retrieve all published reclamation
    router.get("/published", reclamation.findAllPublished);

    router.get("/burpub", reclamation.findAllBybureauandpublished);

    router.get("/burrepara", reclamation.findAllBybureauandrepara);

    router.get("/regpub", reclamation.findAllByregionandpublished);

    router.get("/burid", reclamation.findAllByidbur);
    
    router.get("/rap", reclamation.findAllRap);
    
    router.get("/repara", reclamation.findAllRepara);
  
    // Retrieve a single reclamation with id
    router.get("/:id", reclamation.findOne);    
  
    // Update a reclamation with id
    router.put("/:id", reclamation.update);
  
    // Delete a reclamation with id
    router.delete("/:id", reclamation.delete);
  
    // Create a new reclamation
    router.delete("/", reclamation.deleteAll);
  
    app.use('/api/reclamation', router);
  };