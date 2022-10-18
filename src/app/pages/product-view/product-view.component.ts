import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVariantResponse } from 'src/app/core/products/interfaces/product-variant.interface';
import { IProductResponse } from 'src/app/core/products/interfaces/product.interface';

@Component({
  templateUrl: './product-view.component.html',
  styles: [],
  selector: 'app-product-view',
})
export class ProductViewComponent implements OnInit {
  public product: Partial<IProductResponse> = {};
  public variantProduct: IVariantResponse[] = [];

  constructor(private activadedRoute: ActivatedRoute,

  ) { }

  public ngOnInit(): void {
    this.activadedRoute.data.subscribe(({ product, variants }) => {
      this.product = product;
      this.variantProduct = variants;
    });
  }

  public enableModal() {

  }
}
