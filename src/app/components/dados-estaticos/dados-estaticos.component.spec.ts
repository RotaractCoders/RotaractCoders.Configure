import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEstaticosComponent } from './dados-estaticos.component';

describe('DadosEstaticosComponent', () => {
  let component: DadosEstaticosComponent;
  let fixture: ComponentFixture<DadosEstaticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEstaticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEstaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
