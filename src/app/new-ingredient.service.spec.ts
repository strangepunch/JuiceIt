/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewIngredientService } from './new-ingredient.service';

describe('NewIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewIngredientService]
    });
  });

  it('should ...', inject([NewIngredientService], (service: NewIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
