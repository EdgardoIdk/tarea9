import { TestBed } from '@angular/core/testing';

import { EdgardoguapoService } from './edgardoguapo.service';

describe('EdgardoguapoService', () => {
  let service: EdgardoguapoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgardoguapoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
