const controller = require("../controllers/domain.controller");
const {scope} = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });    
    app.post(
        "/api/domain/scope", 
        [scope.verifyScope],
        controller.scope
    );
    // app.get(
    //     "/api/domain/get", 
    //     [scope.verifyScope],
    //     controller.getEmployee
    // );
    // app.post(
    //     "/api/domain/post", 
    //     [scope.verifyScope],
    //     controller.makeEmployee
    // );
  };
  