import { TestBed } from '@angular/core/testing';

import { TopnavService } from './topnav.service';

describe('TopnavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopnavService = TestBed.get(TopnavService);
    expect(service).toBeTruthy();
  });
});
