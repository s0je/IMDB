"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var movie_1 = require("./movie");
//Reparto
var DiCaprio = new professional_1.Professional(
  "Leonar Dicaprio",
  47,
  "Masculino",
  183,
  75,
  "castaño",
  "caucasico",
  false,
  "americano",
  7,
  "Actor"
);
var Denzel = new professional_1.Professional(
  "Denzel Washington",
  67,
  "Masculino",
  185,
  80,
  "negro",
  "afroamericano",
  false,
  "americano",
  2,
  "Actor"
);
var Almodovar = new professional_1.Professional(
  "Pedro Almodovar",
  72,
  "Masculino",
  177,
  85,
  "blanco",
  "caucasico",
  false,
  "español",
  2,
  "Director"
);
//Pelicula
var esdla = new movie_1.Movie(
  "El señor de los anillos",
  2003,
  "USA",
  "Fantasía épica"
);
esdla.actors = [DiCaprio, Denzel, Almodovar];
esdla.director = Almodovar;
esdla.writer = Almodovar;
esdla.language = "English";
esdla.platform = "Netflix";
esdla.isMCU = true;
esdla.mainCharacterName = "Gandalf";
esdla.producer = DiCaprio;
esdla.distributor = "Warner Bros";
esdla.printAll();
