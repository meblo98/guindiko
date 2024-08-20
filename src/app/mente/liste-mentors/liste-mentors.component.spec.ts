import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMentorsComponent } from './liste-mentors.component';

describe('ListeMentorsComponent', () => {
  let component: ListeMentorsComponent;
  let fixture: ComponentFixture<ListeMentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMentorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
