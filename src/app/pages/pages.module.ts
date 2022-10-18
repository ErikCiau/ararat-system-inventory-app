import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from '../core/products/services/product.service';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    loadChildren: () =>
      import('./pages-rounting.module').then((m) => m.PagesRoutingModule),
  },
];

@NgModule({
  declarations: [PagesComponent, ProductComponent, ProductViewComponent],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
    CommonModule,
  ],
  providers: [ProductService],
  exports: [],
})
export class PagesModule { }
