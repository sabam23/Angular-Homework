import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../item.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';

  getFullData(): Observable<any> {
    return this.http.get(this.url + 'employees');
  }

  getEmployeeData(id: number): Observable<any> {
    return this.http.get(`${this.url}employees/${id}`);
  }

  addData(payload: Employee) {
    return this.http.post(this.url+'employees',payload);
  }

  updateData(id:number, payload: Employee) {
    return this.http.put(`${this.url}employees/${id}`,payload);
  }

  deleteData(id:number) {
    return this.http.delete(`${this.url}employees/${id}`);
  }
}
