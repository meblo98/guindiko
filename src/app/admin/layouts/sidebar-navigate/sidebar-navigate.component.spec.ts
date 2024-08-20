import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavigateComponent } from './sidebar-navigate.component';

describe('SidebarNavigateComponent', () => {
  let component: SidebarNavigateComponent;
  let fixture: ComponentFixture<SidebarNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavigateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
