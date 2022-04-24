module.exports = app => {
    const user = require("../controllers/usercrud.controller");
  
    var router = require("express").Router();
  
    // Create a new user

  
    // Retrieve all user
    router.get("/", user.findAll);
  
 
  
    // Retrieve a single user with id
    router.get("/:id", user.findOne);    
  
    // Update a user with id
    router.put("/:id", user.update);
  
    // Delete a user with id
    router.delete("/:id", user.delete);
  
    // Create a new user
    router.delete("/", user.deleteAll);
  
    app.use('/api/user', router);
  };