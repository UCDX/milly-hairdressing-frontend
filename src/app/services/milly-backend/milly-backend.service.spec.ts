import { TestBed } from '@angular/core/testing';

import { MillyBackendService } from './milly-backend.service';

describe('MillyBackendService', () => {
  let service: MillyBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MillyBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
