import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductResponse } from 'src/app/core/products/interfaces/product.interface';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ products }) => {
      this.products = products;
    });
  }

  public openViewVariantModal() {
    // this.modalService.modalController.emit();
  }
}
