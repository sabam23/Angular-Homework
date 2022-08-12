import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../item.model";
import {EmployeeApiService} from "../services/employee-api.service";

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

  keyPressNumbersWithDecimal(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  onClickPost() {
    this.employeeService.addData(this.employeeForm.value as unknown as Employee).subscribe();
    this.employeeForm.reset()
  }


  constructor(private employeeService: EmployeeApiService) { }

  ngOnInit(): void {
  }

}
