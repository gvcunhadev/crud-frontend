import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendamentoConsulta } from '../models/agendamento-consulta.model';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoConsultaService {

  private apiUrl = 'http://localhost:8080/agendamentos';

  constructor(private http: HttpClient) { }

  getAgendamentos(): Observable<AgendamentoConsulta[]> {
    return this.http.get<AgendamentoConsulta[]>(this.apiUrl);
  }

  createAgendamento(agendamento: AgendamentoConsulta): Observable<AgendamentoConsulta> {
    return this.http.post<AgendamentoConsulta>(this.apiUrl, agendamento);
  }

  updateAgendamento(agendamento: AgendamentoConsulta): Observable<AgendamentoConsulta> {
    const url = `${this.apiUrl}/${agendamento.id}`;
    return this.http.put<AgendamentoConsulta>(url, agendamento);
  }

  deleteAgendamento(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}