const express = require("express");
const router = express.Router();
const artistaController = require("../controllers/artistaController");
const artistaValidator = require("../validators/artistaValidator");


//Mostrar todos los artistas (GET)
router.get("/", artistaController.mostrar);
//Crear artista (POST)
router.post("/crear", artistaValidator, artistaController.crear);
//Editar artista (POST)
router.post("/editar", artistaController.editar);
//Borrar artista (GET)
router.get("/borrar/:id", artistaController.borrar);

module.exports = router;
