import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductService } from '../core/products/services/product.service';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './products/products.component';
import { SupplierComponent } from './suppliers/supplier.component';
import { ProductVariantCreatorComponent } from './product-variant-creator/product-variant-creator.component';

import { DialogModule } from '@angular/cdk/dialog'
import { ProductDialogEditorComponent } from './products/internal/product-dialog-editor.component';
import { ProductDialogConfirmComponent } from './products/internal/product-dialog-confirm.component';
import { SupplierCreatorComponent } from './supplier-creator/supplier-creator.component';
import { SupplierDialogEditorComponent } from './suppliers/internal/supplier-dialog-editor.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCreatorComponent } from './employee-creator/employees-creator.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    loadChildren: () =>
      import('./pages-rounting.module').then((m) => m.PagesRoutingModule),
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    ProductComponent,
    ProductViewComponent,
    ProductCreatorComponent,
    SupplierComponent,
    ProductVariantCreatorComponent,
    ProductDialogEditorComponent,
    ProductDialogConfirmComponent,
    SupplierCreatorComponent,
    SupplierDialogEditorComponent,
    EmployeesComponent,
    EmployeeCreatorComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    DialogModule,
  ],
  providers: [ProductService],
  exports: [],
})
export class PagesModule { }
