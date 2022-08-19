import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../password-validator";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

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
  errMsg:string = '';
  onClickLogIn() {
    for(let user of this.users){
      if(this.loginForm.get('email')?.value === user.email) {
        if (user.password === this.loginForm.get('password')?.value) {
          this.errMsg = 'Correct';
        } else {
          this.errMsg = 'Password Is Incorrect!';
        }
      }
    }
  }
}
