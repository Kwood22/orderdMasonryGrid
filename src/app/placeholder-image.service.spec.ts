import { TestBed } from '@angular/core/testing';

import { PlaceholderImageService } from './placeholder-image.service';

describe('PlaceholderImageService', () => {
  let service: PlaceholderImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
