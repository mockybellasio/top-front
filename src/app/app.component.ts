import { Component, Input } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


   Collegue: Collegue = new Collegue ( 'henry', 800, ["https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-3.jpg"]);
        
   collegue1: Collegue = new Collegue ( 'julie', 400,  [ "https://yscorporate.com/wp-content/uploads/2017/09/Photo-de-profil-professionnelle-par-photographe-2.jpg"  ]);

  
  
   title = 'top-front';
}


// @Input() collegue : Collegue = new Collegue ('jacques', 900, ["https://media.istockphoto.com/photos/party-people-communication-talking-happiness-concept-picture-id668221242?s=170667a"] 

