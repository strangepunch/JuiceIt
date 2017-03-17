/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DelRecipeService } from './del-recipe.service';

describe('DelRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelRecipeService]
    });
  });

  it('should ...', inject([DelRecipeService], (service: DelRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
