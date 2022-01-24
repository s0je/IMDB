"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarsNumber, profesion) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profesion = profesion;
    }
    Professional.prototype.printAll = function () {
        console.log("Name: " + this.name + "\n Genre: " + this.genre + "\n Weigth: " + this.weight + "\n Height: " + this.height + "\n Hair color: " + this.hairColor + "\n Race: " + this.race + "\n Is retired?: " + this.isRetired + "\n Nationality: " + this.nationality + "\n Number of Oscars: " + this.oscarsNumber + " \n Profession: " + this.profesion);
    };
    return Professional;
}());
exports.Professional = Professional;
