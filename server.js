require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // parse requests dari content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests dari content-type - application/x-www-form-urlencoded

// routes
app.get("/", (req, res) => {
  res.json({ message: "HELLO" });
});
app.get("/endpoints", (req, res) => {
  res.json(
    app._router.stack          // registered routes
      .filter(r => r.route)    // take out all the middleware
      .map(r => r.route.path)  // get all the paths
    )
});

require('./app/routes/employee.routes')(app);

// Server Run
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});