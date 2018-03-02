import { TestBed, inject } from '@angular/core/testing';

import { DataDisplayService } from './data-display.service';

describe('DataDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDisplayService]
    });
  });

  it('should be created', inject([DataDisplayService], (service: DataDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
