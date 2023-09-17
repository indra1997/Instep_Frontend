import { TestBed } from '@angular/core/testing';

import { MentorProfileServiceService } from './mentor-profile-service.service';

describe('MentorProfileServiceService', () => {
  let service: MentorProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
