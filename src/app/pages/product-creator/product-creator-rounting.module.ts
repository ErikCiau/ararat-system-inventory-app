import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SuppliersResolver } from "src/app/core/suppliers/resolvers/suppliers.resolver";
import { ProductCreatorComponent } from "./product-creator.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ProductCreatorComponent,
      resolve: {
        suppliers: SuppliersResolver
      }
    },
  ]),
  ]
})
export class ProductCreatorRountingModule { }