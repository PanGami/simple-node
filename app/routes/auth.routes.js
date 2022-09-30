// POST /api/auth/signup
// POST /api/auth/signin

const {verifySignUp} = require("../middleware");
const controller = require("../controllers/auth.controller.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // WARNING!!!
    // This is for test role because it have Security Issue (can make moderator or admin in signup)
    app.post("/api/auth/signup",[verifySignUp.checkDuplicateUsernameOrEmail,verifySignUp.checkRolesExisted],controller.signup);
    app.post("/api/auth/signin", controller.signin);
}