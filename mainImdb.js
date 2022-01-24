"use strict";
exports.__esModule = true;
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var DiCaprio = new professional_1.Professional("Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
var Denzel = new professional_1.Professional("Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
var Almodovar = new professional_1.Professional("Pedro Almodovar", 72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
var Tarantino = new professional_1.Professional("Quentin Tarantino", 58, "Masculino", 188, 96, "blanco", "caucasico", false, "americano", 1, "Director");
var JamieFoxx = new professional_1.Professional("Jamie Foxx", 54, "Masculino", 175, 82, "negro", "afroamericano", false, "americano", 2, "Actor");
var DJango = new movie_1.Movie("Django Desencadenado", 2012, "USA", "Western");
DJango.actors = [DiCaprio, JamieFoxx, Tarantino];
DJango.director = Tarantino;
DJango.writer = Tarantino;
DJango.language = "English";
DJango.platform = "HBO Max";
DJango.isMCU = false;
DJango.mainCharacterName = "DJango";
DJango.producer = Tarantino;
DJango.distributor = "Sony";
var esdla = new movie_1.Movie("El señor de los anillos", 2003, "USA", "Fantasía épica");
esdla.actors = [DiCaprio, Denzel, Almodovar];
esdla.director = Almodovar;
esdla.writer = Almodovar;
esdla.language = "English";
esdla.platform = "Netflix";
esdla.isMCU = true;
esdla.mainCharacterName = "Gandalf";
esdla.producer = DiCaprio;
esdla.distributor = "Warner Bros";
var peliculas = new imdb_1.IMDB([esdla, DJango]);
//Conversion a JSON
var fs = require("fs");
fs.writeFileSync("imdbBBDD.json", JSON.stringify(peliculas));
//Lectura e instancia
var tempBBDD = fs.readFileSync("imdbBBDD.json", "utf-8");
var object = JSON.parse(tempBBDD);
var imdbBBDD = Object.setPrototypeOf(object, imdb_1.IMDB.prototype);
for (var _i = 0, _a = imdbBBDD.peliculas; _i < _a.length; _i++) {
    var peliculas_1 = _a[_i];
    peliculas_1 = Object.setPrototypeOf(peliculas_1, movie_1.Movie.prototype);
}
