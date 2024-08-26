import { TestBed } from '@angular/core/testing';

import { ForumMenteeService } from './forum-mentee.service';

describe('ForumMenteeService', () => {
  let service: ForumMenteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumMenteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
