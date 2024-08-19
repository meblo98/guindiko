import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumMenteeComponent } from './forum-mentee.component';

describe('ForumMenteeComponent', () => {
  let component: ForumMenteeComponent;
  let fixture: ComponentFixture<ForumMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumMenteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
