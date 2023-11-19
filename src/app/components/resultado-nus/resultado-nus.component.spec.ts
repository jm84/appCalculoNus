import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoNusComponent } from './resultado-nus.component';

describe('ResultadoNusComponent', () => {
  let component: ResultadoNusComponent;
  let fixture: ComponentFixture<ResultadoNusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoNusComponent]
    });
    fixture = TestBed.createComponent(ResultadoNusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
