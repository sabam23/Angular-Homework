import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn = false;
  constructor() {}

  public loginPage = true;

  public loggedUserId = 0;

  public currencyCheck = false;
}
