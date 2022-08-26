import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Employee } from '../../interfaces/employee.interface';
import { EmployeeApiService } from 'src/app/features/employees/services/employee-api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm =  new FormGroup({
      name: new FormControl('', [Validators.required]),
      salary: new FormControl(null, [Validators.required]),
      age: new FormControl(null,[Validators.required])
  })

  employeesDB:any = [];
  checker: boolean = true;

  onClickPost() {
    this.employeeService.addData(this.employeeForm.value as unknown as Employee).subscribe(data => {
      this.employeeService.getFullData().subscribe(data => {
        this.employeesDB = data;
      });
    });
    this.employeeForm.reset();
  }
  employeeID: number = 0;

   update(id:number) {
    this.employeeService.getEmployeeData(id).subscribe(data => {
      this.employeeID = data.id;
      this.employeeForm.get('name')?.setValue(data.name);
      this.employeeForm.get('salary')?.setValue(data.salary);
      this.employeeForm.get('age')?.setValue(data.age);
    })
    this.checker = false;
  }

  editEmployee() {
    this.employeeService.updateData(this.employeeID, this.employeeForm.value as unknown as Employee).subscribe(data => {
      this.employeeService.getFullData().subscribe(data => {
        this.employeesDB = data;
      });
    });
    this.checker = true;
    this.employeeForm.reset();
  }

  delete(id:number) {
    this.employeeService.deleteData(id).subscribe(data => {
      this.employeeService.getFullData().subscribe(data => {
        this.employeesDB = data;
      });
    })
  }

  cancel(){
    this.checker = true;
    this.employeeForm.reset();
  }

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor(private employeeService: EmployeeApiService) { }

  ngOnInit(): void {
    this.employeeService.getFullData().subscribe(data => {
      this.employeesDB = data;
    });
  }
}
