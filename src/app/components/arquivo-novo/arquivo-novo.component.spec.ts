import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoNovoComponent } from './arquivo-novo.component';

describe('ArquivoNovoComponent', () => {
  let component: ArquivoNovoComponent;
  let fixture: ComponentFixture<ArquivoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
