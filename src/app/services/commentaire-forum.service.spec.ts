import { TestBed } from '@angular/core/testing';

import { CommentaireForumService } from './commentaire-forum.service';

describe('CommentaireForumService', () => {
  let service: CommentaireForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentaireForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
