import { TestBed } from '@angular/core/testing';

import { SorveteService } from './sorvete.service';

describe('SorveteService', () => {
  let service: SorveteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorveteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
