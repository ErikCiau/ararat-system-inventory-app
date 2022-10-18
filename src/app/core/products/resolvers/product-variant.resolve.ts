import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IVariantResponse } from 'src/app/core/products/interfaces/product-variant.interface';
import { ProductService } from 'src/app/core/products/services/product.service';

@Injectable({ providedIn: 'root' })
export class ProductVariantResolve implements Resolve<IVariantResponse[]> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | IVariantResponse[]
    | Observable<IVariantResponse[]>
    | Promise<IVariantResponse[]> {
    const productId = route.paramMap.get('id') as string;
    return this.productService.getVariantByProduct(productId);
  }
}
