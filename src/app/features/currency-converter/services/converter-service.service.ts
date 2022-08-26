import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConverterServiceService {
  public cur1: any;
  public cur2: any;
  constructor(private http: HttpClient) { }
  private url = 'https://v6.exchangerate-api.com/v6/a4f36e3194b3aea289fc5050/pair';
  getData(): Observable<any>{
    return this.http.get(this.url +`/${this.cur1}/${this.cur2}/`);
  }
}
