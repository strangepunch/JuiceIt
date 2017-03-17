/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeIngredientAmtService } from './change-ingredient-amt.service';

describe('ChangeIngredientAmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeIngredientAmtService]
    });
  });

  it('should ...', inject([ChangeIngredientAmtService], (service: ChangeIngredientAmtService) => {
    expect(service).toBeTruthy();
  }));
});
