/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateShoppingListService } from './create-shopping-list.service';

describe('CreateShoppingListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateShoppingListService]
    });
  });

  it('should ...', inject([CreateShoppingListService], (service: CreateShoppingListService) => {
    expect(service).toBeTruthy();
  }));
});
