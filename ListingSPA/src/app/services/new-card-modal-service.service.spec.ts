import { TestBed } from '@angular/core/testing';

import { NewCardModalServiceService } from './new-card-modal-service.service';

describe('NewCardModalServiceService', () => {
  let service: NewCardModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCardModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
