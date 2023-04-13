import { TestBed } from '@angular/core/testing';

import { Numbe1Service } from './number-1.service';

describe('Numbe1Service', () => {
  let service: Numbe1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Numbe1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
