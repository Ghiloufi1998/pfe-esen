import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/agences';
@Injectable({
  providedIn: 'root'
})
export class AgcrudService {

  constructor(private http: HttpClient) { }


  create(data) {
    return this.http.post(baseUrl, data);
  }
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
  
  findByregion(region) {
    return this.http.get(`${baseUrl}?region=${region}`);
  }


}








