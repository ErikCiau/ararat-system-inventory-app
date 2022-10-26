import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmployeeResolve } from "src/app/core/employees/resolvers/employee.resolve";
import { EmployeesComponent } from "./employees.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesComponent,
        resolve: {
          employees: EmployeeResolve
        }
      }
    ])
  ]
})
export class EmployeesRountingModule { }