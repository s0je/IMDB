import { IMDB } from "./imdb";
import { Movie } from "./movie";
import { Professional } from "./professional";
import  * as user from 'readline-sync'

//Lectura e instancia de imdbBBDD.json
const fs = require("fs");
let tempBBDD = fs.readFileSync("imdbBBDD.json", "utf-8");
let object = JSON.parse(tempBBDD);
let imdbBBDD: IMDB = Object.setPrototypeOf(object, IMDB.prototype);

for (let peliculas of imdbBBDD.peliculas) {
  peliculas = Object.setPrototypeOf(peliculas, Movie.prototype);
}

//readline config

let titulo = user.question('Titulo: ')
let año = user.question('Fecha de lanzamiento: ')
let pais = user.question('Pais: ')
let genero = user.question('Genero: ')

//Añadir pelicula a imdbBBDD
imdbBBDD.peliculas.push(new Movie(titulo,año,pais,genero))
console.log(imdbBBDD)
imdbBBDD.escribirEnFicheroJSON('imdbBBDD.json')