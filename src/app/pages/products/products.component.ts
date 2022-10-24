import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductResponse } from 'src/app/core/products/interfaces/product.interface';
import { Dialog } from '@angular/cdk/dialog'
import { ProductDialogEditorComponent } from './internal/product-dialog-editor.component';
import { ProductDialogConfirmComponent } from './internal/product-dialog-confirm.component';

@Component({
  templateUrl: './products.component.html',
  selector: 'app-products',
  styles: [],
})
export class ProductComponent implements OnInit {
  public products: IProductResponse[] = [];
  public tableTitles = [
    '#',
    'Nombre',
    'Descripción',
    'Precio',
    'Variantes',
    'Proveedor',
    'Creado',
    'Actualizado',
    'Opciones',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: Dialog,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ products }) => {
      this.products = products;
    });
  }

  openDialog(product: IProductResponse) {
    const dialog = this.dialog.open<string>(ProductDialogEditorComponent, {
      data: {
        product
      }
    })
    dialog.closed.subscribe(event => {
      if (event === 'success') {
        this.reloadResolver()
      }
    })
  }

  public openDeleteConfirmationDialog(product: IProductResponse) {
    const dialog = this.dialog.open<string>(ProductDialogConfirmComponent, {
      data: {
        product
      }
    })
    dialog.closed.subscribe(event => {
      if (event === 'success') {
        this.reloadResolver()
      }
    })
  }

  private async reloadResolver() {
    this.router.navigated = false
    this.router.navigate([this.activatedRoute.parent?.url])
  }
}
