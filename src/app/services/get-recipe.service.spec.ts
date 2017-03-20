/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRecipeService } from './get-recipe.service';

describe('GetRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRecipeService]
    });
  });

  it('should ...', inject([GetRecipeService], (service: GetRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
