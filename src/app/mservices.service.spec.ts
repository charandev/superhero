import { TestBed } from '@angular/core/testing';

import { MservicesService } from './mservices.service';

describe('MservicesService', () => {
  let service: MservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
