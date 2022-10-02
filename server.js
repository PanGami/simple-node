require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
//Database
const db = require("./models");
const Role = db.Role;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // parse requests dari content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests dari content-type - application/x-www-form-urlencoded

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// force: jika true maka akan drop table yang sudah ada
db.sequelize.sync({force: true}).then(()=>{
  console.log('Drop and Resync DB with {force: true}');
  initial();
});


// routes
app.get("/", (req, res) => {
  res.json({ message: "HELLO" });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/domain.routes')(app);

// Server Run
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});