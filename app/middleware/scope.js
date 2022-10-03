function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

verifyScope = (req, res, next) => {
    let access_token = req.body.access_token;
    let scope = req.body.scope;

    if(access_token || scope){
        let scopes = ((parseJwt(access_token).scopes).toString()).split(' ');        
        scopes.includes(scope) ? next() : res.status(403).send({ message: "Permission denied"});
        return;
    }
};
const scope = {
    verifyScope: verifyScope
};

module.exports = scope;