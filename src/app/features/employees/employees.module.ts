import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeFormComponent} from "./components/employee-form/employee-form.component";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeRoutingModule} from "./employee-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
