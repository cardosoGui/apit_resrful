let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/api_resful");

let db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro ao conectar no banco"));

db.once("open", function() {
  let useSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    created_at: Date
  });

  exports.User = mongoose.model("User", useSchema);
});
