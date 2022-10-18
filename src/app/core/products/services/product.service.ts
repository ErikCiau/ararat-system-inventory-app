import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { IProductResponse } from '../interfaces/product.interface';
import { IVariantResponse } from '../interfaces/product-variant.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<IProductResponse[]>(`${environment.apiBase}/products`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw err;
        })
      );
  }

  productById(id: string) {
    return this.http
      .get<Partial<IProductResponse>>(`${environment.apiBase}/products/${id}`)
      .pipe(
        retry(3),
        catchError((err) => {
          throw err;
        })
      );
  }

  getVariantByProduct(productId: string) {
    return this.http
      .get<IVariantResponse[]>(
        `${environment.apiBase}/products/${productId}/variants`
      )
      .pipe(
        retry(3),
        catchError((err) => {
          throw err;
        })
      );
  }
}
