const db = require("../../models");
// const User = db.User;
const Employee = db.employee;

exports.createEmployee = (req, res) => {
    Employee.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        organization: req.body.organization
    }).then(result => {
        res.json({
            message: result
        })
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
};

exports.getAllEmployee = (req, res) => {
    Employee.findAll()
        .then(result => {
            res.json({
                Employee : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
};

exports.updateEmployee = (req, res) => {
    Employee.update({        
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        organization: req.body.organization
    }, {where: {id : req.params.id}})
    .then(result => {
        res.json({
            message: "data has been Updated"
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
}

exports.deleteEmployee = (req, res) => {
    Employee.destroy({where: {id : req.params.id}})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
}