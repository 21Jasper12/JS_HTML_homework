import { TestBed } from '@angular/core/testing';

import { Number5Service } from './number-5.service';

describe('Number5Service', () => {
  let service: Number5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Number5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
