import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importe o nome correto da classe do componente
import { AgendamentoConsultaComponent } from './agendamento-consulta.component';

// Use o nome correto da classe do componente
describe('AgendamentoConsultaComponent', () => {
  let component: AgendamentoConsultaComponent;
  let fixture: ComponentFixture<AgendamentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Use o nome correto para importação
      imports: [AgendamentoConsultaComponent]
    })
    .compileComponents();

    // Use o nome correto para criar o componente
    fixture = TestBed.createComponent(AgendamentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});