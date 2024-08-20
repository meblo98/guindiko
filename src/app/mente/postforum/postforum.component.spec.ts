import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostforumComponent } from './postforum.component';

describe('PostforumComponent', () => {
  let component: PostforumComponent;
  let fixture: ComponentFixture<PostforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostforumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
