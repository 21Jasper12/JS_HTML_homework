import { TestBed } from '@angular/core/testing';

import { Number3Service } from './number-3.service';

describe('Number3Service', () => {
  let service: Number3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Number3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
