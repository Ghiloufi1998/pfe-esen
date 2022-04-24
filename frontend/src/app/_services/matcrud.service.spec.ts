import { TestBed } from '@angular/core/testing';

import { MatcrudService } from './matcrud.service';

describe('MatcrudService', () => {
  let service: MatcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
