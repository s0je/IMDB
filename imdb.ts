import { readFileSync } from "fs";
import { Movie } from "./movie";
import { Professional } from "./professional";

export class IMDB {
  // Declaracion de atributos

  public peliculas: Movie[];

  //Constructor

  constructor(peliculas: Movie[]) {
    this.peliculas = peliculas;
  }

  // Metodos

  public escribirEnFicheroJSON(nombre: string) {
    const fs = require("fs");
    fs.writeFileSync(nombre, JSON.stringify(this.peliculas));
  }

  public obtenerinstaciaIMDB(nombreFichero: string): IMDB {
    const fs = require("fs");
    //Lectura e instancia
    let tempBBDD = fs.readFileSync(nombreFichero, "utf-8");
    let object = JSON.parse(tempBBDD);
    let imdbBBDD = Object.setPrototypeOf(object, IMDB.prototype);

    for (let peliculas of imdbBBDD.peliculas) {
      peliculas = Object.setPrototypeOf(peliculas, Movie.prototype);
    }
    return imdbBBDD;
  }
}
