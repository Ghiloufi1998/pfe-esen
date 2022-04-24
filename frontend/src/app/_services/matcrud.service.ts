import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/materiels';
@Injectable({
  providedIn: 'root'
})
export class MatcrudService {

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
  findByPublished() {
    return this.http.get(`${baseUrl}?published=true`);
  }

  findByBureg(condition) {
    return this.http.get(`${baseUrl}/burreg?${condition}`);
  }

  findByIdbur(condition) {
    return this.http.get(`${baseUrl}/bur?${condition}`);
  }


}










