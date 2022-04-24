const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");
const Role = db.role;
dbConfig = require('./app/config/db.config');

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify :false,
    useCreateIndex :true,

  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "PFE Wassim Ghiloufi" });
});
//routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/reclamation.routes")(app);
require("./app/routes/materiels.routes")(app);
require("./app/routes/agences.routes")(app);
require("./app/routes/usercrud.routes")(app);
require("./app/routes/fournisseurs.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "gestr"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'gestr' to roles collection");
        });
  
        new Role({
          name: "gestad"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'gestad' to roles collection");
        });
  
        new Role({
          name: "gestac"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'gestac' to roles collection");
        });
        new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
          });
      }
    });
  }