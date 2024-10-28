import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  constructor() {}

  calcularRaices() {
    const { a, b, c } = this;

    if (a === 0) {
      this.resultado = 'El valor de "a" no puede ser 0.';
      return;
    }

    const discriminante = Math.pow(b, 2) - (4 * a * c);

    if (discriminante > 0) {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      this.resultado = `Raíces reales: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (discriminante === 0) {
      const x = -b / (2 * a);
      this.resultado = `Raíz única: x = ${x.toFixed(2)}`;
    } else {
      const realPart = (-b / (2 * a)).toFixed(2);
      const imaginaryPart = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
      this.resultado = `Raíces complejas: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }
  }
}
