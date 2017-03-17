/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddIngredientService } from './add-ingredient.service';

describe('AddIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddIngredientService]
    });
  });

  it('should ...', inject([AddIngredientService], (service: AddIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
