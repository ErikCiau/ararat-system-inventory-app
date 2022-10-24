import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { IProductResponse } from "src/app/core/products/interfaces/product.interface";
import { ProductService } from "src/app/core/products/services/product.service";

@Component({
  template: `
  <div class="modal modal-open">
    <div class="modal-box">
      <h3 class="font-bold text-lg text-error">¡Atención!</h3>
      <p class="py-4">
        Esta apunto de eliminar <strong class="text-primary">{{product.name}}</strong> y sus <strong class="text-primary">{{product.variants.length}}</strong> variantes.
        Esto podría causar que el producto no esté disponible en otras plataformas.
        ¿está seguro que desea continuar?
      </p>
      <div class="modal-action">
        <button class="btn btn-error" (click)="closeDialog('error')">Cancelar</button>
        <button class="btn btn-success" (click)="confirmDialog()">Confirmar</button>
      </div>
    </div>
</div>
  `
})
export class ProductDialogConfirmComponent implements OnInit {

  public product!: IProductResponse

  constructor(
    private dialogRef: DialogRef,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.product = this.dialogRef.config.data.product as IProductResponse
  }

  public closeDialog(event: 'success' | 'error') {
    this.dialogRef.close(event)
  }

  public confirmDialog() {
    this.productService.deleteProduct(this.product.id, !this.product.active).subscribe(() => {
      this.closeDialog('success')
    })
  }
}