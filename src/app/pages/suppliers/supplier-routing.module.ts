import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SuppliersResolver } from "src/app/core/suppliers/resolvers/suppliers.resolver";
import { SupplierComponent } from "./supplier.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SupplierComponent,
        resolve: {
          suppliers: SuppliersResolver
        }
      }
    ])
  ]
})
export class SupplierRountingModule { }