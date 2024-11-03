import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class MockDataService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get('/assets/Data/listUser.json');
  }

  getJobPlatforms(): Observable<any> {
    return this.http.get('/assets/Data/listPlateformExtract.json');
  }

  getJobListings(): Observable<any> {
    return this.http.get('/assets/Data/listJobs.json');
  }
}
