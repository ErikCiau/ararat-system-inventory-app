import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IProductResponse } from "src/app/core/products/interfaces/product.interface";
import { ISupplierResponse } from 'src/app/core/suppliers/interfaces/supplier-response.interface';
import { SupplierService } from 'src/app/core/suppliers/services/supplier.service';

@Component({
  selector: 'app-modal-editor',
  templateUrl: './product-dialog-editor.component.html'
})
export class ProductDialogEditorComponent implements OnInit {
  public product!: IProductResponse
  private productEditorForm!: FormGroup
  public suppliers: ISupplierResponse[] = []

  constructor(
    private dialogRef: DialogRef,
    private formBuilder: FormBuilder,
    private supplierService: SupplierService,
  ) { }

  public ngOnInit(): void {
    this.product = this.dialogRef.config.data.product as IProductResponse

    this.supplierService.allSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers as ISupplierResponse[]
    })

    this.productEditorForm = this.formBuilder.group({
      name: this.formBuilder.control(this.product.name, [Validators.required]),
      price: this.formBuilder.control(this.product.price, [Validators.required, Validators.min(1)]),
      supplier: this.formBuilder.control(this.product.id, [Validators.required])
    })
  }

  get name() {
    return this.productEditorForm.get('name') as FormControl<string>
  }
  get price() {
    return this.productEditorForm.get('price') as FormControl<number>
  }
  get supplier() {
    return this.productEditorForm.get('supplier') as FormControl<number>
  }
  get isValidForm(): boolean {
    return this.productEditorForm.valid
  }

  public onSubmit() {
    if (!this.isValidForm) return
    this.closeDialog('success')
  }
  public closeDialog(event: 'success' | 'cancel') {
    this.dialogRef.close(event)
  }
}