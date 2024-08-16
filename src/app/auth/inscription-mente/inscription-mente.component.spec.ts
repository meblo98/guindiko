import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMenteComponent } from './inscription-mente.component';

describe('InscriptionMenteComponent', () => {
  let component: InscriptionMenteComponent;
  let fixture: ComponentFixture<InscriptionMenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionMenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionMenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
