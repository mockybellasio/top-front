import { Component, Input } from '@angular/core';
import { Collegue, Avis } from './models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


   collegue: Collegue = new Collegue ( 'henry', 800, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-3.jpg"]);
        
   collegue1: Collegue = new Collegue ( 'julie', 400,  [ "https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-2.jpg"]);

  
  
   
   title = 'top-front';
}



