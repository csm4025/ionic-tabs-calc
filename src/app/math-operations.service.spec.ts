import { TestBed } from '@angular/core/testing';

import { MathOperationsService } from './math-operations.service';

describe('MathOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathOperationsService = TestBed.get(MathOperationsService);
    expect(service).toBeTruthy();
  });
});
