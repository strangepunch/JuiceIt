/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetIngredientDetailsService } from './get-ingredient-details.service';

describe('GetIngredientDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetIngredientDetailsService]
    });
  });

  it('should ...', inject([GetIngredientDetailsService], (service: GetIngredientDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
