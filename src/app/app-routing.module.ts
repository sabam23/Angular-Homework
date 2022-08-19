import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {AppComponent} from "./app.component";
import {FormListComponent} from "./form-list/form-list.component";
import {LoginComponent} from "./login/login.component";
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'users',
    component: FormListComponent
  },
  {
    path: 'currency',
    component: CurrencyConverterComponent
  },
  {
    path: 'employee',
    component: EmployeeFormComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
