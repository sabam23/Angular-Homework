import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee, User} from "../item.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/';

  getFullData(): Observable<any> {
    return this.http.get(this.url + 'users');
  }

  getEmployeeData(id: number): Observable<any> {
    return this.http.get(`${this.url}users/${id}`);
  }

  addData(payload: User) {
    return this.http.post(this.url+'users',payload);
  }

  updateData(id:number, payload: Employee) {
    return this.http.put(`${this.url}users/${id}`,payload);
  }

  deleteData(id:number) {
    return this.http.delete(`${this.url}users/${id}`);
  }
}
