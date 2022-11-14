import { TestBed } from '@angular/core/testing';

import { ContenutoService } from './contenuto.service';

describe('ContenutoService', () => {
  let service: ContenutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContenutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
