import { TestBed } from '@angular/core/testing';

import { StandardValuesService } from './standard-values.service';

describe('StandardValuesService', () => {
  let service: StandardValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
