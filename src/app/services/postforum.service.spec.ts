import { TestBed } from '@angular/core/testing';
import { PostForumService} from './postforum.service';

describe('PostforumService', () => {
  let service: PostForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
