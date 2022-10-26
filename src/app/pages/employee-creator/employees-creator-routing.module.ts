import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmployeeCreatorComponent } from "./employees-creator.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeCreatorComponent
      }
    ])
  ]
})
export class EmployeeCreatorRountingModule { }