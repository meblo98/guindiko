import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilMenteeComponent } from './accueil-mentee.component';

describe('AccueilMenteeComponent', () => {
  let component: AccueilMenteeComponent;
  let fixture: ComponentFixture<AccueilMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilMenteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
