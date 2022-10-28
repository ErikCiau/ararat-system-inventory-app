import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

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

  public submitEmployeeCreatorForm(form: NgForm) {
    if (form.invalid) return
    console.log(form.value)
  }
}