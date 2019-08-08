import { TestBed } from '@angular/core/testing';

import { ApiSocioeducativoService } from './api-socioeducativo.service';

describe('ApiSocioeducativoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSocioeducativoService = TestBed.get(ApiSocioeducativoService);
    expect(service).toBeTruthy();
  });
});
