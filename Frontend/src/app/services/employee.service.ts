import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boss } from '../models/boss.model'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/';
  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Boss[]> {
    return this.http.get<Boss[]>(this.baseUrl)
      .pipe(
        map(data => data.map(data => new Boss().deserialize(data)))
      );
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data, this.httpOptions);
  }

  setBoss(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${id}`, data, this.httpOptions);
  }

}
