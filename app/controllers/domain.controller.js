// Note
// - scope: create new User in database (role is user if not specifying role)

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

exports.scope = (req, res) => {
    let decodedValue = parseJwt(req.body.access_token);
    res.status(200).send(decodedValue.scopes); // Hanya mendapatkan scopes
};

exports.input = (req, res) => {
    let decodedValue = parseJwt(req.body.id_token);
    res.status(200).send(decodedValue);     
    
    // Here input to DB
    // Input 

    // TabelDB.findAll({
    //     where: {
    //         email: { [Op.eq] : req.body.iniVariable } // SELECT * FROM TabelDB where email = req.body.iniVariable
    //         // Jika ingin mengambil dari token maka decodedValue.email
    //     }
    // }).then(iniVariable => {
    //     TabelDB.setNamaTabelDB(iniVariable).then( () => {
    //         res.send({message: "Apalah Was Registered successfully!"});
    //     });
    // }).catch(err => {
    //     res.status(500).send({message: err.message});
    // });
};