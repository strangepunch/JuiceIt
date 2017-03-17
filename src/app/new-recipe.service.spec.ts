/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewRecipeService } from './new-recipe.service';

describe('NewRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewRecipeService]
    });
  });

  it('should ...', inject([NewRecipeService], (service: NewRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
