import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p [appResaltado]="'pink'">
        Mundo Raro y Extraño
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
