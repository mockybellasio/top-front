import { Component } from '@angular/core';
import { Avis, Collegue, Vote } from './models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  listesCollegue: Collegue[] = [

    new Collegue('Henry', 800, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-3.jpg"]),

    new Collegue('Julie', 400, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-2.jpg"]),

    new Collegue("Fred", 800, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-4.jpg"]),
    new Collegue("Diana", 900, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-5.jpg"]),
    new Collegue("Cecilia ", 1000, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-6-705x1058.jpg"])

  ]

  listesVote : Vote[] = [ 

   new Vote(this.listesCollegue[0], Avis.AIMER)

  ]
 
  title = 'top-front';
}



