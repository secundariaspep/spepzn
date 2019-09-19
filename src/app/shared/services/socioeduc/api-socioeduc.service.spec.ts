import { TestBed } from '@angular/core/testing';

import { ApiSocioeducService } from './api-socioeduc.service';

describe('ApiSocioeducService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSocioeducService = TestBed.get(ApiSocioeducService);
    expect(service).toBeTruthy();
  });
});
