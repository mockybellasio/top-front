import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue, Vote, } from '../models';
import { CollegueService } from '../services/collegue.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  collegue:Collegue ; //= new Collegue("Rob", 800, "listImages[0]", "Robert", "dupont", "robert@hotmail.fr", "7 rue de la gare paris");
 // collegue1: Collegue = new Collegue("Alice", 1000, "collegue.listImages[1]", "Alicia", "duval", "alice@hotmail.fr", "10 rue de la mairie Montpellier ");

  pseudo: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute , private nawak:CollegueService) {

      // récupération du paramètre id
      this.pseudo = this.route.snapshot.paramMap.get("pseudo")
      this.nawak.colleguesParPseudo(this.pseudo).then((c:Collegue)=>this.collegue = c);
  
  }

  ngOnInit() {
}

}

