import { Professional } from "./professional";
import { Movie } from "./movie";
//Reparto
let DiCaprio = new Professional ("Leonar Dicaprio", 47, "Masculino", 183, 75, "castaño", "caucasico", false, "americano", 7, "Actor");
let Denzel = new   Professional ("Denzel Washington", 67, "Masculino", 185, 80, "negro", "afroamericano", false, "americano", 2, "Actor");
let Almodovar = new Professional ("Pedro Almodovar",72, "Masculino", 177, 85, "blanco", "caucasico", false, "español", 2, "Director");
//Pelicula
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

 esdla.printAll()