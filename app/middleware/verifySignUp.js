// note
// – check if username or email is duplicate or not
// – check if roles in the request is existed or not

// Middleware functions are functions that have access to the 
// - request object ( req )
// - response object ( res )
// - when next invoked it will executes the middleware succeeding the current middleware.

const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({ 
        where: { 
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                messasge:"Failed! Username already exists"
            });
            return;
        }

        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "Failed! Email already exists"
                });
                return;
            }

            next();
        });
    });
};

checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let i = 0; i < req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Failed! Role doesn't exist = " + req.body.roles[i] 
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted : checkRolesExisted
};

module.exports = verifySignUp;