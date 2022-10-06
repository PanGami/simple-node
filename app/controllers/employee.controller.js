const db = require("../../models");
const Employee = db.employee;
const {tokenProcess} = require("../middleware");

exports.createEmployee = (req, res) => {
    if(req.headers.token){
        let user = tokenProcess.parseJwt(req.headers.token);
        let data = {
            name: user.name,        
            email: user.email,        
            picture: user.picture,
            foreign: user.email
        }
        Employee.findOne({
            where: {foreign : data.foreign}
        }).then(result =>{
            !result ? 
            Employee.create(data).then(result => { 
                res.json({message: "New Employee Created"})
            }) :       
            res.json({message: "Employee Exist! Can't create a new employee"})
        }).catch(err => {
                res.status(500).send({message: err.message});
        });
    }
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