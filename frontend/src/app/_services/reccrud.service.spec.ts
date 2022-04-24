import { TestBed } from '@angular/core/testing';

import { ReccrudService } from './reccrud.service';

describe('ReccrudService', () => {
  let service: ReccrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReccrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
