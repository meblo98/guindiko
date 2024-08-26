import { TestBed } from '@angular/core/testing';

import { PostforumService } from './postforum.service';

describe('PostforumService', () => {
  let service: PostforumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostforumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
