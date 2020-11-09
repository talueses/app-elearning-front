import { TestBed } from '@angular/core/testing';

import { DocenteGuard } from './docente.guard';

describe('DocenteGuard', () => {
  let guard: DocenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DocenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
