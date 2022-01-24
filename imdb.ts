import { readFileSync } from "fs";
import { Movie } from "./movie";
import { Professional } from "./professional";

export class IMDB
{
    // Declaracion de atributos

    public peliculas: Movie [];

    //Constructor

    constructor(peliculas: Movie[])
    {
        this.peliculas = peliculas;
    }

    // Metodos

    public escribirEnFicheroJSON(nombre:string)
    {
        const fs = require("fs");
        fs.writeFileSync(nombre,JSON.stringify(this.peliculas));
    }

    public obtenerinstaciaIMDB(nombreFichero:string):IMDB
    {
        const fs = require("fs");
        let temp = fs.readFileSync(nombreFichero, 'utf-8');
        let imdbDDBB: IMDB = JSON.parse(temp);

        return imdbDDBB;
        
    }
}
