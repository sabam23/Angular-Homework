import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {passwordValidator} from "../password-validator";
import {of} from "rxjs";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // forms: FormGroup<any> = new FormGroup('');
  forms = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9]+"), Validators.minLength(7)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z0-9]+"),Validators.minLength(7)]),
    nickname: new FormControl('',[Validators.required,
      Validators.pattern('^[a-zA-Z0-9-]*$')
    ]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^(\\+995\\s?)?((\\([0-9]{3}\\))|[0-9]{3})[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$")]),
    website: new FormControl('', [Validators.required,
      Validators.pattern("(https?:\\/\\/)?(www\\.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)|(https?:\\/\\/)?(www\\.)?(?!ww)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)")
    ]),
    checkbox: new FormControl('', [ Validators.requiredTrue])
  }, {validators: passwordValidator});
  users: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  public remove(index: any): void {
    this.users.splice(index,1);
  }

  public onClick(): void {
    this.users.push(this.forms.value);
    this.forms.reset();
  }
}
