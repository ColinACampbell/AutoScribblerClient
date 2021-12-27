import { TestBed } from '@angular/core/testing';

import { ScribblerService } from './scribbler.service';

describe('ScribblerService', () => {
  let service: ScribblerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScribblerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
