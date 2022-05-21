const mongoose = require("mongoose");

const url =
  "mongodb+srv://alejandroguionpablo:fiesta94@cluster0.httbc.mongodb.net/db_artistas";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectar MongoDB"));
db.once("open", function callback() {
  console.log("¡Conectado al Servidor MongoDB!");
});
module.exports = db;
