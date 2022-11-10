import { TestBed } from '@angular/core/testing';

import { RickserviceService } from './rickservice.service';

describe('RickserviceService', () => {
  let service: RickserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
