import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IProductResponse } from 'src/app/core/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/products/services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductsResolve implements Resolve<IProductResponse[]> {
  constructor(private productService: ProductService) {}

  resolve():
    | IProductResponse[]
    | Observable<IProductResponse[]>
    | Promise<IProductResponse[]> {
    return this.productService.getAll();
  }
}
