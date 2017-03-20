/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeleteIngredientService } from './delete-ingredient.service';

describe('DeleteIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteIngredientService]
    });
  });

  it('should ...', inject([DeleteIngredientService], (service: DeleteIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
