import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMentorComponent } from './navbar-mentor.component';

describe('NavbarMentorComponent', () => {
  let component: NavbarMentorComponent;
  let fixture: ComponentFixture<NavbarMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMentorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
