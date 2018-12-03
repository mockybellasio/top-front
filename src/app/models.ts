import { AvisComponentComponent } from './avis-component/avis-component.component';

export class Collegue {

    pseudo: string

    score: number

    listImages: string[];


   constructor( pseudo:string, score:number, listImages:string[]) { 

        this.pseudo = pseudo;

        this.score =score;

        this.listImages = listImages
    }

}

export enum Avis {

    AIMER, DETESTER
}

  