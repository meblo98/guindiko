import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMenteAccepteComponent } from './liste-mente-accepte.component';

describe('ListeMenteAccepteComponent', () => {
  let component: ListeMenteAccepteComponent;
  let fixture: ComponentFixture<ListeMenteAccepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMenteAccepteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMenteAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
