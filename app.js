const express = require("express");
const app = express();

require("./db");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/',require("./routes/artistas"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3008, () => {
  console.log("¡ Estableciendo conexion en http://localhost:3008 !");
});
