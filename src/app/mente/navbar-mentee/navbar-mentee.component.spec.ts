import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMenteeComponent } from './navbar-mentee.component';

describe('NavbarMenteeComponent', () => {
  let component: NavbarMenteeComponent;
  let fixture: ComponentFixture<NavbarMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMenteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
