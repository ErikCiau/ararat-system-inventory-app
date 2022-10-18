import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view.component';
import { ProductVariantResolve } from '../../core/products/resolvers/product-variant.resolve';
import { ProductResolve } from '../../core/products/resolvers/product-view.resolve';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductViewComponent,
        resolve: {
          product: ProductResolve,
          variants: ProductVariantResolve,
        },
      },
    ]),
  ],
})
export class ProductViewRoutingModule { }
