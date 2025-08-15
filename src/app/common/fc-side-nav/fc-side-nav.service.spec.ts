import { TestBed } from '@angular/core/testing';

import { FcSideNavService } from './fc-side-nav.service';

describe('FcSideNavService', () => {
  let service: FcSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
