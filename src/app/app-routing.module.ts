import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./features/Form & Form-list/components/form/form.component";
import {AppComponent} from "./app.component";
import {FormListComponent} from "./features/Form & Form-list/components/form-list/form-list.component";
import {LoginComponent} from "./features/Form & Form-list/components/login/login.component";
import {CurrencyConverterComponent} from "./features/currency-converter/components/currency-converter.component";
import {EmployeeFormComponent} from "./features/employees/components/employee-form/employee-form.component";
import {LoginGuard} from "./core/Guards/login.guard";
import {LogPageGuard} from "./core/Guards/log-page.guard";
import {CurrencyGuard} from "./core/Guards/currency.guard";

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
    loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
