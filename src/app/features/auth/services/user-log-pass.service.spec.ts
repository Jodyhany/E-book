import { TestBed } from '@angular/core/testing';

import { UserLogPassService } from './user-log-pass.service';

describe('UserLogPassService', () => {
  let service: UserLogPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLogPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
