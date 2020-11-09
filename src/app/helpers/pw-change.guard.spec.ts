import { TestBed } from '@angular/core/testing';

import { PwChangeGuard } from './pw-change.guard';

describe('PwChangeGuard', () => {
  let guard: PwChangeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PwChangeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
