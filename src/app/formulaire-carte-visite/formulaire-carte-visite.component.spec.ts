import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCarteVisiteComponent } from './formulaire-carte-visite.component';

describe('FormulaireCarteVisiteComponent', () => {
  let component: FormulaireCarteVisiteComponent;
  let fixture: ComponentFixture<FormulaireCarteVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCarteVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
