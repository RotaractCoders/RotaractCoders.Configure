import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqNovoComponent } from './faq-novo.component';

describe('FaqNovoComponent', () => {
  let component: FaqNovoComponent;
  let fixture: ComponentFixture<FaqNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
