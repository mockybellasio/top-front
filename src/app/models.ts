import { Component, Input} from '@angular/core';

@Component({
    selector: 'mon-composant',
    template: `
        <h1>{{titre}}</h1>
    `
})
export class Collegue {

    @Input() collegue:string;

    collegues:string[];

  constructor() {
    this.collegues = ['Yves', 'Landry', 'Bob']
  }

  ngOnInit() {
  }

}

