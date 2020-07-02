import { TestBed } from '@angular/core/testing';

import { BizdireService } from './bizdire.service';

describe('BizdireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BizdireService = TestBed.get(BizdireService);
    expect(service).toBeTruthy();
  });
});
