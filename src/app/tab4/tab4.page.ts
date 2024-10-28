import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  fechaInicio: string | null = null;
  fechaFin: string | null = null;
  diferenciaDias: number | null = null;

  calcularDias() {
    if (this.fechaInicio && this.fechaFin) {
      const inicio = new Date(this.fechaInicio);
      const fin = new Date(this.fechaFin);

      // Calcula la diferencia en milisegundos y luego la convierte a días
      const diferenciaTiempo = fin.getTime() - inicio.getTime();
      this.diferenciaDias = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24));
    } else {
      this.diferenciaDias = null;
    }
  }
  constructor() {}
}
