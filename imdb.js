"use strict";
exports.__esModule = true;
exports.IMDB = void 0;
var movie_1 = require("./movie");
var IMDB = /** @class */ (function () {
    //Constructor
    function IMDB(peliculas) {
        this.peliculas = peliculas;
    }
    // Metodos
    IMDB.prototype.escribirEnFicheroJSON = function (nombre) {
        var fs = require("fs");
        fs.writeFileSync(nombre, JSON.stringify(this.peliculas));
    };
    IMDB.prototype.obtenerinstaciaIMDB = function (nombreFichero) {
        var fs = require("fs");
        //Lectura e instancia
        var tempBBDD = fs.readFileSync(nombreFichero, "utf-8");
        var object = JSON.parse(tempBBDD);
        var imdbBBDD = Object.setPrototypeOf(object, IMDB.prototype);
        for (var _i = 0, _a = imdbBBDD.peliculas; _i < _a.length; _i++) {
            var peliculas = _a[_i];
            peliculas = Object.setPrototypeOf(peliculas, movie_1.Movie.prototype);
        }
        return imdbBBDD;
    };
    return IMDB;
}());
exports.IMDB = IMDB;
