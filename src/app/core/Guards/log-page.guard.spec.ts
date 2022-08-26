import { TestBed } from '@angular/core/testing';

import { LogPageGuard } from './log-page.guard';

describe('LogPageGuard', () => {
  let guard: LogPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
