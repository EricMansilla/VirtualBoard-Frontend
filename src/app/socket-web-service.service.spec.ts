import { TestBed } from '@angular/core/testing';

import { SocketWebServiceService } from './socket-web-service.service';

describe('SocketWebServiceService', () => {
  let service: SocketWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
