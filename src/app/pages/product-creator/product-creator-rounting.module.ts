import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductCreatorComponent } from "./product-creator.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ProductCreatorComponent,
    },
  ]),
  ]
})
export class ProductCreatorRountingModule { }