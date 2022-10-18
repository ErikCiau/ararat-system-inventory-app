import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IProductResponse } from 'src/app/core/products/interfaces/product.interface';
import { ProductService } from 'src/app/core/products/services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductResolve implements Resolve<Partial<IProductResponse>> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Partial<IProductResponse>
    | Observable<Partial<IProductResponse>>
    | Promise<Partial<IProductResponse>> {
    const productId = route.paramMap.get('id') as string;
    return this.productService.productById(productId);
  }
}
