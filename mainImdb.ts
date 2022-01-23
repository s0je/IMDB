import { IMDB } from "./imdb";
import {Movie} from "./movie";
import { Professional } from "./professional";

let DiCaprio = new Professional ("Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
let Denzel = new   Professional ("Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
let Almodovar = new Professional ("Pedro Almodovar",72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
let Tarantino = new Professional ("Quentin Tarantino",58, "Masculino", 188, 96, "blanco", "caucasico", false, "americano", 1, "Director");
let JamieFoxx = new   Professional ("Jamie Foxx", 54, "Masculino", 175, 82, "negro", "afroamericano", false, "americano", 2, "Actor");

let DJango = new Movie ("Django Desencadenado", 2012, "USA", "Western");
DJango.actors = [DiCaprio,JamieFoxx,Tarantino];
DJango.director = Tarantino;
DJango.writer = Tarantino;
DJango.language = "English";
DJango.platform = "HBO Max";
DJango.isMCU = false;
DJango.mainCharacterName = "DJango";
DJango.producer = Tarantino;
DJango.distributor = "Sony";

let esdla = new Movie('El señor de los anillos',2003,'USA','Fantasía épica')
esdla.actors =[DiCaprio,Denzel,Almodovar]
esdla.director=Almodovar
esdla.writer = Almodovar
esdla.language = 'English'
esdla.platform = 'Netflix'
esdla.isMCU = true
esdla.mainCharacterName = 'Gandalf'
esdla.producer = DiCaprio
esdla.distributor = 'Warner Bros'

let peliculas = new IMDB ([esdla,DJango]);