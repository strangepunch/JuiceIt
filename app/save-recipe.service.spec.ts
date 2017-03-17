/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveRecipeService } from './save-recipe.service';

describe('SaveRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveRecipeService]
    });
  });

  it('should ...', inject([SaveRecipeService], (service: SaveRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
