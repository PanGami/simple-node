const {tokenProcess} = require("../middleware");
const controller = require("../controllers/employee.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });    
    app.post("/api/employee",[tokenProcess.verifyScope("insert:employee")], controller.createEmployee);
    app.get("/api/employee",[tokenProcess.verifyScope("read:employee")], controller.getAllEmployee);
    app.put("/api/employee/:id",[tokenProcess.verifyScope("update:employee")], controller.updateEmployee);
    app.delete("/api/employee/:id",[tokenProcess.verifyScope("delete:employee")], controller.deleteEmployee);
  };
  