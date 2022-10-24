import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { IProductResponse } from '../interfaces/product.interface';
import { IVariantResponse } from '../interfaces/product-variant.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) { }

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

  createProduct(product: any) {
    return this.http
      .post<IProductResponse>(`${environment.apiBase}/products`, product)
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

  updateProductInfo(productId: string, productInfo: { name: string, price: number, supplier: string }) {
    return this.http.put<void>(`${environment.apiBase}/products/${productId}`, productInfo).pipe(
      retry(1),
      catchError(err => {
        throw err
      })
    )
  }

  deleteProduct(productId: string) {
    return this.http.delete<void>(`${environment.apiBase}/products/${productId}`).pipe(
      retry(1),
      catchError(err => {
        throw err
      })
    )
  }
}
