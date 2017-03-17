/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetShoppingListService } from './get-shopping-list.service';

describe('GetShoppingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetShoppingListService]
    });
  });

  it('should ...', inject([GetShoppingListService], (service: GetShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
