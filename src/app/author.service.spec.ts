import { TestBed } from '@angular/core/testing';

import { LiteraryService } from './author.service';

describe('literaryService', () => {
  let service: LiteraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
