import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getGestrBoard(): Observable<any> {
    return this.http.get(API_URL + 'gestr', { responseType: 'text' });
  }

  getGestadBoard(): Observable<any> {
    return this.http.get(API_URL + 'gestad', { responseType: 'text' });
  }

  getGestacBoard(): Observable<any> {
    return this.http.get(API_URL + 'gestac', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
