import { TestBed } from '@angular/core/testing';

import { EmployeeAcmeService } from './employee-acme.service';

describe('EmployeeAcmeService', () => {
  let service: EmployeeAcmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAcmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
