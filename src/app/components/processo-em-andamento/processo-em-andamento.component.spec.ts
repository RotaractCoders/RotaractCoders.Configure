import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoEmAndamentoComponent } from './processo-em-andamento.component';

describe('ProcessoEmAndamentoComponent', () => {
  let component: ProcessoEmAndamentoComponent;
  let fixture: ComponentFixture<ProcessoEmAndamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessoEmAndamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessoEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
