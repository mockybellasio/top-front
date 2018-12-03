

export class Collegue {

    pseudo: string

    score: number

    listImages: string[];


    constructor(pseudo: string, score: number, listImages: string[]) {

        this.pseudo = pseudo;

        this.score = score;

        this.listImages = listImages
    }

}

export enum Avis {

    AIMER, DETESTER
}

export class Vote {

    colleg: Collegue

    avis: Avis


    constructor(colleg: Collegue, avis: Avis) {

        this.colleg = colleg;

        this.avis = avis

    

 }

    }

