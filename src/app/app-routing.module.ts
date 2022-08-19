import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {AppComponent} from "./app.component";
import {FormListComponent} from "./form-list/form-list.component";
import {LoginComponent} from "./login/login.component";
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import {LoginGuard} from "./Guards/login.guard";
import {LogPageGuard} from "./Guards/log-page.guard";
import {CurrencyGuard} from "./Guards/currency.guard";

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
  canActivate: [LogPageGuard]
  },
  {
    path: 'users',
    component: FormListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'currency',
    component: CurrencyConverterComponent,
    canActivate: [CurrencyGuard]
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
