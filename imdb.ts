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

        // let movieTemp: Movie;
        // let peliculasTemp: IMDB;
        // let arrayMovie = [];
        // for(let i in this.peliculas)
        // {
        //     for(let j in this.peliculas[i])
        //     {
        //         if(this.peliculas[i][j] == "actors")
        //         {
        //             let actors: Professional;
        //             for(let k in this.peliculas[i][j])
        //             {
        //                 let arrayActors = [];
        //                 let actorsTemp = new Professional( actors.name, actors.age, actors.genre,actors.weight,actors.height,actors.hairColor,actors.race,actors.isRetired,actors.name,actors.oscarsNumber,actors.profesion);
        //                 arrayActors.push(actorsTemp);
        //             }
        //         } 
        //         let movie = new Movie (this.peliculas[i].title,this.peliculas[i].releaseYear,arrayActors,this.peliculas[i].nationality,this.peliculas[i].director,this.peliculas[i].writer,this.peliculas[i].language,this.peliculas[i].platform,this.peliculas[i].isMCU,this.peliculas[i].mainCharacterName,this.peliculas[i].producer,this.peliculas[i].distributor,this.peliculas[i].genre)
        //     }
        // }