import { TestBed } from '@angular/core/testing';

import { StandardFormsService } from './standard-forms.service';

describe('StandardFormsService', () => {
  let service: StandardFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandardFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
