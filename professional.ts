export class Professional
{
    // Declaracion de variables
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profesion: string;

    constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profesion: string)
    {
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

    public printAll():void
    {
        console.log("Name: "+this.name+ "\n Genre: "+this.genre+"\n Weigth: "+this.weight+"\n Height: "+this.height+"\n Hair color: "+this.hairColor+"\n Race: "+this.race+"\n Is retired?: "+this.isRetired+"\n Nationality: "+this.nationality+"\n Number of Oscars: "+this.oscarsNumber+" \n Profession: "+this.profesion);
    }
}