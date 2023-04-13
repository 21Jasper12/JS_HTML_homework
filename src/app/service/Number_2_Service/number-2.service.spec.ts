import { TestBed } from '@angular/core/testing';

import { Number2Service } from './number-2.service';

describe('Number2Service', () => {
  let service: Number2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Number2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
