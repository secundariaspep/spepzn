import { TestBed } from '@angular/core/testing';

import { ApiSocioeducativoactualizacionesService } from './api-socioeducativoactualizaciones.service';

describe('ApiSocioeducativoactualizacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSocioeducativoactualizacionesService = TestBed.get(ApiSocioeducativoactualizacionesService);
    expect(service).toBeTruthy();
  });
});
