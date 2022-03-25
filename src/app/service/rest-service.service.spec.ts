import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RestServiceService } from './rest-service.service';

describe('RestServiceService', () => {
  let service: RestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(RestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
