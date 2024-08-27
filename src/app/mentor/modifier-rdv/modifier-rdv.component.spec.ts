import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRDVComponent } from './modifier-rdv.component';

describe('ModifierRDVComponent', () => {
  let component: ModifierRDVComponent;
  let fixture: ComponentFixture<ModifierRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierRDVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
