import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoConsultaComponent } from './components/agendamento-consulta/agendamento-consulta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgendamentoConsultaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'agendamento-frontend';
}