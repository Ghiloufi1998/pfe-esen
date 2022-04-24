import { TestBed } from '@angular/core/testing';

import { FourcrudService } from './fourcrud.service';

describe('FourcrudService', () => {
  let service: FourcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FourcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
