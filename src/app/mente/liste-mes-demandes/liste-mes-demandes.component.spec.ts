import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMesDemandesComponent } from './liste-mes-demandes.component';

describe('ListeMesDemandesComponent', () => {
  let component: ListeMesDemandesComponent;
  let fixture: ComponentFixture<ListeMesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMesDemandesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
