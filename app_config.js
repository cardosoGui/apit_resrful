let express = require("express");

let app = (module.exports = express());

let bodyParser = require("body-parser");

let allowCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
