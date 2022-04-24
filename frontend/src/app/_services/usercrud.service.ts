import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/user';
@Injectable({
  providedIn: 'root'
})
export class UsercrudService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }
  getByregion(condition){
    return this.http.get(`${baseUrl}?region=${condition}`)
  }


}








