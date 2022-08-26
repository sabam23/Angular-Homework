import { Component, OnInit } from '@angular/core';
import {FormComponent} from "../form/form.component";
import {UsersService} from "../../services/users.service";
import { Employee } from '../../interfaces/employee.interface';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { passwordValidator } from 'src/app/core/validators/password-validator';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  users: any = [];
  checker = false;

  forms = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z0-9]+"),Validators.minLength(7)]),
    nickname: new FormControl('',[Validators.required,
      Validators.pattern('^[a-zA-Z0-9-]*$')
    ]),
    salary: new FormControl(null, [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^(\\+995\\s?)?((\\([0-9]{3}\\))|[0-9]{3})[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$")]),
    website: new FormControl('', [Validators.required,
      Validators.pattern("(https?:\\/\\/)?(www\\.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)|(https?:\\/\\/)?(www\\.)?(?!ww)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)")
    ])
  }, {validators: passwordValidator});

  constructor(private usersService: UsersService,private loginService: LoginService) {}

  ngOnInit(): void {
    this.usersService.getFullData().subscribe(data => {
      this.users = data;
    });
  }

  delete(id:number) {
    this.usersService.deleteData(id).subscribe(data => {
      this.usersService.getFullData().subscribe(data => {
        this.users = data;
      });
    })
  }

  editEmployee() {
    this.usersService.updateData(this.employeeID, this.forms.value as unknown as Employee).subscribe(data => {
      this.usersService.getFullData().subscribe(data => {
        this.users = data;
      });
    });
    this.checker = false;
    this.forms.reset();
  }
  employeeID: number = 0;

  update(id:number) {
    this.usersService.getEmployeeData(id).subscribe(data => {
      this.employeeID = data.id;
      this.forms.get('email')?.setValue(data.email);
      this.forms.get('nickname')?.setValue(data.nickname);
      this.forms.get('phone')?.setValue(data.phone);
      this.forms.get('website')?.setValue(data.website);
      this.forms.get('confirmPassword')?.setValue(data.confirmPassword);
      this.forms.get('password')?.setValue(data.password);
      this.forms.get('salary')?.setValue(data.salary);
    })
    this.checker = true;
  }

  cancel(){
    this.checker = false;
    this.forms.reset();
  }

  checkUser(userId:number) {
    return userId === this.loginService.loggedUserId;
  }
}
