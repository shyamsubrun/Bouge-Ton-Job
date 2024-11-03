import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get('/assets/data/listUser.json');
  }

  getJobPlatforms(): Observable<any> {
    return this.http.get('/assets/data/listPlateformExtract.json');
  }

  getJobListings(): Observable<any> {
    return this.http.get('/assets/data/listJobs.json');
  }
}
