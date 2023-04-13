import { TestBed } from '@angular/core/testing';

import { Number4Service } from './number-4.service';

describe('Number4Service', () => {
  let service: Number4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Number4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
