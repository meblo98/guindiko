import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionMentorComponent } from './inscription-mentor.component';

describe('InscriptionMentorComponent', () => {
  let component: InscriptionMentorComponent;
  let fixture: ComponentFixture<InscriptionMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionMentorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscriptionMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
