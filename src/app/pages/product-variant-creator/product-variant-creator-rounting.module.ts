import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductVariantCreatorComponent } from "./product-variant-creator.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ProductVariantCreatorComponent
    }
  ])],
})
export class ProductVariantCreatorRountingModule { }