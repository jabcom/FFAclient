import { TestBed } from '@angular/core/testing';

import { TitleWordsService } from './title-words.service';

describe('TitleWordsService', () => {
  let service: TitleWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
