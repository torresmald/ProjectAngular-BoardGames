import { TestBed } from '@angular/core/testing';

import { ApiBoardGamesService } from './api-board-games.service';

describe('ApiBoardGamesService', () => {
  let service: ApiBoardGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBoardGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
