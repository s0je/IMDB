export class movie {
  //Atributos
 public title: string;
 public releaseYear: number;
 public actors: Professional[];
 public nationality: string;
 public director: Professional;
 public writer: Professional;
 public language: string;
 public platform: string;
 public isMCU: boolean;
 public mainCharacterName: string;
 public producer:Professional;
 public distributor: string;
 public genre: string;

  //Constructor
  constructor(title: string,releaseYear: number,nacionality: string, genre: string) {
    this.title=title
    this.releaseYear=releaseYear
    this.nationality = nacionality
    this.genre = genre

  }
  //Public metods
  getStringActors():string{
    let actores = ''
    for (let i = 0; i<this.actors.length;i++){
      if(i == this.actors.length -1){
        actores+=this.actors[i].name+ '.'
      }else {
        actores += this.actors[i].name+ ', '
      }
    }
    return actores

  }
  printAll(){
      console.log(`Título: ${this.title}
      Año de lanzamiento: ${this.releaseYear}
      Actores: ${this.getStringActors()}
      País: ${this.nationality}
      Director: ${this.director.name}
      Guionista: ${this.writer.name}
      Idioma: ${this.language}
      Plataforma: ${this.platform}
      Universo Marvel: ${this.isMCU}
      Protagonista: ${this.mainCharacterName}
      Productor: ${this.producer.name}
      Distribuidora: ${this.distributor}
      Género: ${this.genre}`)
  }

}

