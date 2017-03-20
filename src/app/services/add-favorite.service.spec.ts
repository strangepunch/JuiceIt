/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddFavoriteService } from './add-favorite.service';

describe('AddFavoriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFavoriteService]
    });
  });

  it('should ...', inject([AddFavoriteService], (service: AddFavoriteService) => {
    expect(service).toBeTruthy();
  }));
});
