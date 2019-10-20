import { TestBed } from '@angular/core/testing';

import { carService } from './car.service';

describe('CarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: carService = TestBed.get(carService);
    expect(service).toBeTruthy();
  });
});
