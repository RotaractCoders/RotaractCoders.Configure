import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioNovoComponent } from './socio-novo.component';

describe('SocioNovoComponent', () => {
  let component: SocioNovoComponent;
  let fixture: ComponentFixture<SocioNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
