"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    //Constructor
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nacionality;
        this.genre = genre;
    }
    //Public metods
    Movie.prototype.getStringActors = function () {
        var actores = '';
        for (var i = 0; i < this.actors.length; i++) {
            if (i == this.actors.length - 1) {
                actores += this.actors[i].name + '.';
            }
            else {
                actores += this.actors[i].name + ', ';
            }
        }
        return actores;
    };
    Movie.prototype.printAll = function () {
        console.log("T\u00EDtulo: ".concat(this.title, "\nA\u00F1o de lanzamiento: ").concat(this.releaseYear, "\nActores: ").concat(this.getStringActors(), "\nPa\u00EDs: ").concat(this.nationality, "\nDirector: ").concat(this.director.name, "\nGuionista: ").concat(this.writer.name, "\nIdioma: ").concat(this.language, "\nPlataforma: ").concat(this.platform, "\nUniverso Marvel: ").concat(this.isMCU, "\nProtagonista: ").concat(this.mainCharacterName, "\nProductor: ").concat(this.producer.name, "\nDistribuidora: ").concat(this.distributor, "\nG\u00E9nero: ").concat(this.genre));
    };
    return Movie;
}());
exports.Movie = Movie;
