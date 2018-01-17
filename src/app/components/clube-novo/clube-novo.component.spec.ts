import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeNovoComponent } from './clube-novo.component';

describe('ClubeNovoComponent', () => {
  let component: ClubeNovoComponent;
  let fixture: ComponentFixture<ClubeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
