import { TestBed } from '@angular/core/testing';

import { AssetCatService } from './asset-cat.service';

describe('AssetCatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetCatService = TestBed.get(AssetCatService);
    expect(service).toBeTruthy();
  });
});
