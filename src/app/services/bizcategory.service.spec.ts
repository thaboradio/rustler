import { TestBed } from '@angular/core/testing';

import { BizcategoryService } from './bizcategory.service';

describe('BizcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BizcategoryService = TestBed.get(BizcategoryService);
    expect(service).toBeTruthy();
  });
});
