const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/gestad", [authJwt.verifyToken, authJwt.isGestad], controller.gestadBoard);

  app.get(
    "/api/test/gestac",
    [authJwt.verifyToken, authJwt.isGestac],
    controller.gestacBoard
  );

  app.get(
    "/api/test/gestad",
    [authJwt.verifyToken, authJwt.isGestad],
    controller.gestadBoard
  );

  app.get(
    "/api/test/gestr",
    [authJwt.verifyToken, authJwt.isGestr],
    controller.gestrBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};