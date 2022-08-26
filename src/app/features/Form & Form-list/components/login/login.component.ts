import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { passwordValidator } from 'src/app/core/validators/password-validator';
import {UsersService} from "../../services/users.service";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService,private loginService: LoginService, private router: Router) { }

  formReg = true;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)])
  });

  ngOnInit(): void {
    this.usersService.getFullData().subscribe(data => {
      this.users = data;
    });
  }
  users: any = [];


  getData() {
    this.usersService.getFullData().subscribe(data => {
      this.users = data;
    });
    this.formReg=false;
  }

  onClickLogIn() {
    for(let user of this.users){
      if(this.loginForm.get('email')?.value === user.email) {
        if (user.password === this.loginForm.get('password')?.value) {
          this.loginService.isLoggedIn = true;
          this.loginService.loggedUserId = user.id;
          this.loginService.loginPage = false;
          if(user.salary > 400) {
            this.loginService.currencyCheck = true;
          }
          this.router.navigate(['/users']);
        }else {
          console.log('Invalid')
        }
      }
    }
  }

}
