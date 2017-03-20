/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeleteRecipeService } from './delete-recipe.service';

describe('DeleteRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteRecipeService]
    });
  });

  it('should ...', inject([DeleteRecipeService], (service: DeleteRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
