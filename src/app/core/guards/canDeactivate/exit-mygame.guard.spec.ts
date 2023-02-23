import { TestBed } from '@angular/core/testing';

import { ExitMygameGuard } from './exit-mygame.guard';

describe('ExitMygameGuard', () => {
  let guard: ExitMygameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitMygameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
