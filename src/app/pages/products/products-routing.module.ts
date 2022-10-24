import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products.component';
import { ProductsResolve } from '../../core/products/resolvers/products.resolve';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          products: ProductsResolve,
        },
      },
    ]),
  ],
})
export class ProductRountingModule {}
