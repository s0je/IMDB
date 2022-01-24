"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var user = require("readline-sync");
//Lectura e instancia de imdbBBDD.json
var fs = require("fs");
var tempBBDD = fs.readFileSync("imdbBBDD.json", "utf-8");
var object = JSON.parse(tempBBDD);
var imdbBBDD = Object.setPrototypeOf(object, imdb_1.IMDB.prototype);
for (var _i = 0, _a = imdbBBDD.peliculas; _i < _a.length; _i++) {
    var peliculas = _a[_i];
    peliculas = Object.setPrototypeOf(peliculas, movie_1.Movie.prototype);
}
//readline config
var titulo = user.question('Titulo: ');
var año = user.question('Fecha de lanzamiento: ');
var pais = user.question('Pais: ');
var genero = user.question('Genero: ');
//Añadir pelicula a imdbBBDD
imdbBBDD.peliculas.push(new movie_1.Movie(titulo, año, pais, genero));
console.log(imdbBBDD);
imdbBBDD.escribirEnFicheroJSON('imdbBBDD.json');
