import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SupplierCreatorComponent } from './supplier-creator.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SupplierCreatorComponent
      }
    ])
  ]
})
export class SupplierCreatorRoutingModule { }