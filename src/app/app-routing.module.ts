import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Paciente } from './models/paciente';
import { ResultadoNusComponent } from './components/resultado-nus/resultado-nus.component';

const routes: Routes = [
  { path: '', component: Paciente },
  { path: 'calculatenus', component: ResultadoNusComponent },
  { path: '**', component: Paciente },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
