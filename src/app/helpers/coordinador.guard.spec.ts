import { TestBed } from '@angular/core/testing';

import { CoordinadorGuard } from './coordinador.guard';

describe('CoordinadorGuard', () => {
  let guard: CoordinadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoordinadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
