import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nusCalculatorApp';
  listCalculosNus: any[] = [];
  nitrogenoExcretado: number = 0;
  nitrogenoIngerido: number = 0;
  nitrogenoPositivoMin: number = 0;
  nitrogenoPositivoMax: number = 0;
  valornut: number = 0;
  calculoNus(datosPaciente: any) {
    if (datosPaciente.alimentacion === 'Oral') {
      this.nitrogenoExcretado = datosPaciente.Nuu24hr + 4;
    } else if (datosPaciente.alimentacion === 'NE') {
      this.nitrogenoExcretado = datosPaciente.Nuu24hr + 3;
    } else if (datosPaciente.alimentacion === 'NP') {
      this.nitrogenoExcretado = datosPaciente.Nuu24hr + 2;
    }
    this.nitrogenoIngerido = datosPaciente.protIngerida / 6.25;

    // Balance neutro
    datosPaciente.balanceNeutro =
      (this.nitrogenoExcretado * 6.25) / datosPaciente.peso;
    //Balance nitrogenado
    datosPaciente.balanceNitrogenado =
      this.nitrogenoIngerido - this.nitrogenoExcretado;
    //Balance Positivo
    this.nitrogenoPositivoMin = this.nitrogenoExcretado + 2;
    this.nitrogenoPositivoMax = this.nitrogenoExcretado + 7;
    datosPaciente.balancePositivoMin =
      (this.nitrogenoPositivoMin * 6.25) / datosPaciente.peso;
    datosPaciente.balancePositivoMax =
      (this.nitrogenoPositivoMax * 6.25) / datosPaciente.peso;
    // estres nut

    this.valornut = (this.nitrogenoExcretado * 1000) / datosPaciente.peso;
    datosPaciente.valornut = this.valornut;
    if (this.valornut < 200) {
      datosPaciente.estresnut = 'Leve';
    } else if (this.valornut >= 200 || this.valornut <= 300) {
      datosPaciente.estresnut = 'Moderado';
    } else {
      datosPaciente.estresnut = 'Severo';
    }

    this.listCalculosNus.push(datosPaciente);
  }

  eliminarConsultaListado(index: number) {
    this.listCalculosNus.splice(index, 1);
  }
}
