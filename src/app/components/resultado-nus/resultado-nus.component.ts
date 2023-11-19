import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-resultado-nus',
  templateUrl: './resultado-nus.component.html',
  styleUrls: ['./resultado-nus.component.css'],
})
export class ResultadoNusComponent {
  @Input() listadoCalculoPaciente: any;
  @Output() deleteConsulta = new EventEmitter<number>();

  panelOpenState = false;

  eliminarConsulta(index: number) {
    this.deleteConsulta.emit(index);
  }
}
