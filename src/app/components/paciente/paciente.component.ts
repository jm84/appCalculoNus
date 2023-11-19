import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent {
  today = Date.now();
  tiposdealimentacion: string[] = ['Oral', 'NE', 'NP'];
  nombre: string = '';
  FechaCalculo: Date = new Date(this.today);
  Nuu24hr: number = 0;
  protIngerida: number = 0;
  peso: number = 0;
  alimentacion: string = '';
  balanceNitrogenado: number = 0;
  balanceNeutro: number = 0;
  balancePositivoMin: number = 0;
  balancePositivoMax: number = 0;
  estresnut: string = '';
  volornut: number = 0;

  @Output() nuevoCalculo = new EventEmitter<any>();
  formularioIncorrecto: boolean = false;
  constructor() {}

  datosPaciente() {
    if (
      this.nombre == '' ||
      this.FechaCalculo == null ||
      this.Nuu24hr == 0 ||
      this.protIngerida == 0 ||
      this.peso == 0 ||
      this.alimentacion == ''
    ) {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    const datosPaciente = {
      nombre: this.nombre,
      FechaCalculo: this.FechaCalculo,
      Nuu24hr: this.Nuu24hr,
      protIngerida: this.protIngerida,
      peso: this.peso,
      alimentacion: this.alimentacion,
      balanceNitrogenado: this.balanceNitrogenado,
      balanceNeutro: this.balanceNeutro,
      balancePositivoMin: this.balancePositivoMin,
      balancePositivoMax: this.balancePositivoMax,
      estresnut: this.estresnut,
      valornut: this.volornut,
    };
    console.log(datosPaciente);
    this.nuevoCalculo.emit(datosPaciente);
  }
}
