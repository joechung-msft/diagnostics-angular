import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  provideHttpClientTesting,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DiagnosticsService } from './diagnostics.service';

describe('DiagnosticsService', () => {
  let service: DiagnosticsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DiagnosticsService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DiagnosticsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('fetchDiagnostics returns diagnostics data', async () => {
    const mockDiagnostics = {
      extensions: {},
      buildInfo: {},
      serverInfo: {},
    };

    const promise = service.fetchDiagnostics('http://example.com');
    const req = httpMock.expectOne('http://example.com');
    expect(req.request.method).toBe('GET');
    req.flush(mockDiagnostics);

    const result = await promise;
    expect(result).toEqual(mockDiagnostics);
  });

  it('fetchDiagnostics throws if request fails', async () => {
    const promise = service.fetchDiagnostics('http://fail');
    const req = httpMock.expectOne('http://fail');
    req.flush(null, { status: 500, statusText: 'Network error' });

    await expectAsync(promise).toBeRejected();
  });
});
