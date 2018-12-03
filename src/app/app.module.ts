import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { TitreComponent } from './titre/titre.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { AccueilComponentComponent } from './accueil-component/accueil-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    TitreComponent,
    HistoriqueVotesComponentComponent,
    AccueilComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
