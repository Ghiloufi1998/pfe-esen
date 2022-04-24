import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api/reclamation';
@Injectable({
  providedIn: 'root'
})
export class ReccrudService {

  constructor(private http: HttpClient) { }


  create(data) {
    return this.http.post(baseUrl, data);
  }
  getAll() {
    return this.http.get(baseUrl);
  }
  getAllbyregiongestad(condition) {
    return this.http.get(`${baseUrl}/reg?region=${condition}`);
  }
  getAllbybureaugestac(condition) {
    return this.http.get(`${baseUrl}/bur?bureau=${condition}`);
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
    return this.http.get(`${baseUrl}/published`);
  }
  findByRap() {
    return this.http.get(`${baseUrl}/rap`);
  }
  findByRepara() {
    return this.http.get(`${baseUrl}/repara`);
  }
  findByregion(condition) {
    return this.http.get(`${baseUrl}?region=${condition}`);
  }
  findByBureau(condition) {
    return this.http.get(`${baseUrl}?bureau=${condition}`);
  }
  findByBureauandpublished(condition) {
    return this.http.get(`${baseUrl}/burpub?${condition}`);
  }
  findByregionandpublished(condition) {
    return this.http.get(`${baseUrl}/regpub?${condition}`);
  }
  findByBureauandrepara(condition) {
    return this.http.get(`${baseUrl}/burrepara?${condition}`);
  }
  findByidbur(condition) {
    return this.http.get(`${baseUrl}/burid?idbur=${condition}`);
  }

}








