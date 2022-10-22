import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products-routing.module').then(
            (m) => m.ProductRountingModule
          ),
      },
      {
        path: 'products/creator',
        loadChildren: () =>
          import('./product-creator/product-creator-rounting.module').then(
            (m) => m.ProductCreatorRountingModule
          ),
        pathMatch: 'full'
      },
      {
        path: 'products/:id',
        loadChildren: () =>
          import('./product-view/product-view-rounting.module').then(
            (m) => m.ProductViewRoutingModule
          ),
      },
      {
        path: 'products/:id/creator',
        loadChildren: () =>
          import('./product-variant-creator/product-variant-creator-rounting.module').then(
            (m) => m.ProductVariantCreatorRountingModule
          ),
      },
      {
        path: 'suppliers',
        loadChildren: () => import('./suppliers/supplier-routing.module').then(
          (m) => m.SupplierRountingModule
        )
      }
    ]),
  ],
  declarations: [],
})
export class PagesRoutingModule { }
