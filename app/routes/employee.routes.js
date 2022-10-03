const {isScope} = require("../middleware");
const controller = require("../controllers/employee.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });    
    app.post("/api/employee", controller.createEmployee);
    app.get("/api/employee", controller.getAllEmployee);
    app.put("/api/employee/:id", controller.updateEmployee);
    app.delete("/api/employee/:id", controller.deleteEmployee);
  };
  