import { TestBed } from '@angular/core/testing';

import { AgcrudService } from './agcrud.service';

describe('AgcrudService', () => {
  let service: AgcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
