const { body, validationResult } = require('express-validator');
const Artista = require("../model/Artista");

const handleValidator = async(req, res, next) => {
    try {
        validationResult(req).throw();
         next();
    } catch (err) {
        const artistas = await Artista.find({});
        const valores = req.body
        res.render('index', { validaciones: err.array(), valores, artistas });
    }
}

const artistaValidator = [
    body('name','Ingrese el nombre del Artista')
        .exists()
        .isLength({min: 3, max: 25 }),
    body('song', 'Ingrese la cancion del Artista')
        .exists()
        .isLength({min: 2, max: 25 }),
    body('ran', 'Ingrese un Ranking del 1 al 10 !')
    .exists()
    .isNumeric({ min: 1, max: 10 }),
    (req, res, next) => {
        return handleValidator(req, res, next)
    }
];

module.exports = artistaValidator;