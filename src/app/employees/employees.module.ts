import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeRoutingModule} from "./employee-routing.module";



@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeesModule { }
