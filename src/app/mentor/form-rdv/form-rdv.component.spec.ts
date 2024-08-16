import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRDVComponent } from './form-rdv.component';

describe('FormRDVComponent', () => {
  let component: FormRDVComponent;
  let fixture: ComponentFixture<FormRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRDVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
