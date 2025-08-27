import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticsService {
  private http = inject(HttpClient);

  fetchDiagnostics(environment: string): Promise<Diagnostics> {
    return firstValueFrom(this.http.get<Diagnostics>(environment));
  }
}
