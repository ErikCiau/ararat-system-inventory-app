import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IRegisterEmployee } from "src/app/core/employees/interfaces/employee.interface";
import { EmployeeService } from "src/app/core/employees/services/employee.service";

@Component({
  templateUrl: './employees-creator.component.html'
})
export class EmployeeCreatorComponent {
  public employeeForm = {
    name: '',
    lastname: '',
    contact: '',
    password: '',
  }

  constructor(
    private employeeService: EmployeeService
  ) { }

  public submitEmployeeCreatorForm(form: NgForm) {
    if (form.invalid) return
    this.employeeService.register(form.value as IRegisterEmployee).subscribe(response => {
      console.log(response)
    })
  }
}