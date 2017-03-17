/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DelIngredientService } from './del-ingredient.service';

describe('DelIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelIngredientService]
    });
  });

  it('should ...', inject([DelIngredientService], (service: DelIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
