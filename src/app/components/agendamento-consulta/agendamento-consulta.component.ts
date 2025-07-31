import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação padrão para standalone
import { FormsModule } from '@angular/forms'; // Adicione esta importação
import { AgendamentoConsultaService } from '../../services/agendamento-consulta.service';
import { AgendamentoConsulta } from '../../models/agendamento-consulta.model';

@Component({
  selector: 'app-agendamento-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicione o FormsModule aqui
  templateUrl: './agendamento-consulta.component.html',
  styleUrls: ['./agendamento-consulta.component.css']
})
export class AgendamentoConsultaComponent implements OnInit {
  
  agendamentos: AgendamentoConsulta[] = [];
  agendamento: AgendamentoConsulta = this.resetAgendamento();
  
  constructor(private agendamentoService: AgendamentoConsultaService) { }

  ngOnInit(): void {
    this.loadAgendamentos();
  }

  loadAgendamentos(): void {
     this.agendamentoService.getAgendamentos().subscribe((data: AgendamentoConsulta[]) => {
      this.agendamentos = data;
    });
  }

  submitForm(): void {
    if (this.agendamento.id) {
      // Update
      this.agendamentoService.updateAgendamento(this.agendamento).subscribe(() => {
        this.loadAgendamentos();
        this.agendamento = this.resetAgendamento();
      });
    } else {
      // Create
      this.agendamentoService.createAgendamento(this.agendamento).subscribe(() => {
        this.loadAgendamentos();
        this.agendamento = this.resetAgendamento();
      });
    }
  }

  editAgendamento(agendamento: AgendamentoConsulta): void {
    this.agendamento = { ...agendamento };
  }

  deleteAgendamento(id: number): void {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      this.agendamentoService.deleteAgendamento(id).subscribe(() => {
        this.loadAgendamentos();
      });
    }
  }

  resetAgendamento(): AgendamentoConsulta {
    return {
      id: undefined,
      motivo: '',
      profissional: '',
      especialidade: '',
      endereco: '',
      data: '',
      hora: ''
    };
  }
}