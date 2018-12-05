
import { environment } from '../../environments/environment';

import { Collegue, Avis} from '../models';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';



const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues(): Promise<Collegue[]> {

    // récupérer la liste des collègues côté serveur

    return this._http.get( URL_BACKEND + '/collegues').toPromise()

      .then((tabColServeur: any[]) => tabColServeur.map(cServeur => new Collegue(cServeur.pseudo,  cServeur.score, [cServeur.photo])));

  }


   donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {

  // TODO Aimer ou Détester un collègue côté serveur

   return this._http.patch<Collegue>(`${URL_BACKEND}/Collegues/${unCollegue.pseudo}`, { 
  Avis: avis.valueOf() 
  }) 

.toPromise();


}

}