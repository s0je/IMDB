import { Movie } from "./movie";

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
    }
}