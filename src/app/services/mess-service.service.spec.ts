import { TestBed } from '@angular/core/testing';

import { MessServiceService } from './mess-service.service';

describe('MessServiceService', () => {
  let service: MessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
