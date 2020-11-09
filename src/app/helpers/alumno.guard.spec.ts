import { TestBed } from '@angular/core/testing';

import { AlumnoGuard } from './alumno.guard';

describe('AlumnoGuard', () => {
  let guard: AlumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
