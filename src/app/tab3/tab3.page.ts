import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  public calcularRaices (a: number, b:number, c:number) {
    const x = (-b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/2*a
    const x2 = (-b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/2*a
  }

}
