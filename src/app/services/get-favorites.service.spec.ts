/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetFavoritesService } from './get-favorites.service';

describe('GetFavoritesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetFavoritesService]
    });
  });

  it('should ...', inject([GetFavoritesService], (service: GetFavoritesService) => {
    expect(service).toBeTruthy();
  }));
});
