import { TestBed } from '@angular/core/testing';

import { PersonAcmeService } from './person-acme.service';

describe('PersonAcmeService', () => {
  let service: PersonAcmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonAcmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
