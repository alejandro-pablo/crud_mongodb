const Artista = require("../model/Artista");

//Mostrar Artistas
module.exports.mostrar = (req, res) => {
  Artista.find({}, (error, artistas) => {
    if (error) {
       res.status(500).json({
       message: "Error mostrando los artistas",
      });
    }
    res.render("index", { artistas: artistas });
  });
};

//Crear Artistas
module.exports.crear = (req, res) => {
  const artista = new Artista({
    nombre: req.body.name,
    cancion: req.body.song,
    ranking: req.body.ran,
  });
  artista.save(function (error, artista) {
    if (error) {
      res.status(500).json({
      message: "Error al crear el Artista",
      });
    }
    res.redirect("/");
  });
};

//Editar Cargas
module.exports.editar = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const cancion = req.body.cancion;
  const ranking = req.body.ranking;
  Artista.findByIdAndUpdate(
    id,
    { nombre, cancion, ranking },
    (error, artista) => {
      if (error) {
        res.status(500).json({
          message: "Error actualizando el Artista",
        });
      }
      res.redirect("/");
    }
  );
};

//Borrar Cargas
module.exports.borrar = (req, res) => {
  const id = req.params.id;
  Artista.findByIdAndRemove(id, (error, artista) => {
    if (error) {
      res.status(500).json({
      message: "Error eliminando el Artista",
      });
    }
    res.redirect("/");
  });
};
