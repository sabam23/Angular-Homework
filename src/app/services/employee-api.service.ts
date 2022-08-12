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

  getData(): Observable<any> {
    return this.http.get(this.url + 'employees');
  }

  addData(payload: Employee) {
    return this.http.post(this.url+'employees',payload);
  }
}
