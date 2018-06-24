let app = require("./app_config.js");

let validator = require("validator");

let userController = require("./controller/userController.js");

app.get("/", function(req, res) {
  res.end("Servidor On");
});

app.get("/users", function(req, res) {
  // res.json([{ name: "Guilherme" }, { name: "Leidiana" }, { name: "Guga" }]);
  userController.list(resp => {
    res.json(resp);
  });
});
app.get("/users/:id", function(req, res) {
  let id = validator.trim(validator.escape(req.param("id")));
  userController.user(id, resp => {
    res.json(resp);
  });
});
app.post("/users", function(req, res) {
  // res.json(req.body);

  let fullname = validator.trim(validator.escape(req.param("fullname")));
  let email = validator.trim(validator.escape(req.param("email")));
  let password = validator.trim(validator.escape(req.param("password")));

  userController.save(fullname, email, password, resp => {
    res.json(resp);
  });
  // res.end("post users");
});
app.put("/users", function(req, res) {
  // res.end("pt users");
  let id = validator.trim(validator.escape(req.param("id")));
  let fullname = validator.trim(validator.escape(req.param("fullname")));
  let email = validator.trim(validator.escape(req.param("email")));
  let password = validator.trim(validator.escape(req.param("password")));

  userController.update(id, fullname, email, password, resp => {
    res.json(resp);
  });
});
app.delete("/users/:id", function(req, res) {
  // res.end("delete users");

  let id = validator.trim(validator.escape(req.param("id")));

  userController.delete(id, resp => {
    res.json(resp);
  });
});
