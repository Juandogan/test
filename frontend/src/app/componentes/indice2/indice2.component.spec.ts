import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indice2Component } from './indice2.component';

describe('Indice2Component', () => {
  let component: Indice2Component;
  let fixture: ComponentFixture<Indice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Indice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Indice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
