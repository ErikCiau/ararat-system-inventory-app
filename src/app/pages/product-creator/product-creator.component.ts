import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/core/products/services/product.service";
import { ISupplierResponse } from "src/app/core/suppliers/interfaces/supplier-response.interface";
import { VariantService } from "src/app/core/variants/services/variant.service";

export interface ProductCreatorForm {
  name: string;
  price: number;
  supplier: string;
  variants: Variant[];
}

export interface Variant {
  description: string;
  quantity: number;
  size: string;
}


@Component({
  templateUrl: './product-creator.component.html',
  styles: [],
  selector: 'app-product-creator'
})
export class ProductCreatorComponent implements OnInit {

  private productCreatorForm!: FormGroup
  private _suppliers!: ISupplierResponse[]

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private variantService: VariantService
  ) { }

  get variantForms() {
    return (this.productCreatorForm.get('variants') as FormArray).controls as any[]
  }

  ngOnInit(): void {
    this.productCreatorForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control(0, [Validators.required, Validators.min(1)]),
      supplier: this.formBuilder.control('Seleccione', [Validators.required, Validators.pattern(/[1-9]/g)]),
      variants: this.formBuilder.array([])
    })

    this.activatedRoute.data.subscribe(({ suppliers }) => {
      this._suppliers = suppliers || []
    })
  }

  get name() {
    return this.productCreatorForm.get('name') as FormControl<string>
  }
  get price() {
    return this.productCreatorForm.get('price') as FormControl<number>
  }
  get supplier() {
    return this.productCreatorForm.get('supplier') as FormControl<string>
  }
  get variants() {
    return this.productCreatorForm.get('variants') as FormArray
  }
  get isDisableButton(): boolean {
    return !this.productCreatorForm.valid
  }
  get indexVariantForm() {
    return (i: number) => {
      const variants = this.productCreatorForm.get('variants') as FormArray
      return variants.at(i)
    }
  }
  get suppliers(): ISupplierResponse[] {
    return this._suppliers
  }

  addVariantForm() {
    const variantForm = this.formBuilder.group({
      description: this.formBuilder.control(''),
      size: this.formBuilder.control('', [Validators.required]),
      quantity: this.formBuilder.control(1, [Validators.required, Validators.min(1)]),
    });

    const formArray = this.productCreatorForm.get('variants') as FormArray
    formArray.push(variantForm)
  }

  deleteVariantForm(index: number) {
    const variants = this.productCreatorForm.get('variants') as FormArray
    variants.removeAt(index)
  }

  submitForm() {
    if (!this.productCreatorForm.valid) return
    const productForm = this.productCreatorForm.getRawValue() as ProductCreatorForm
    const { variants, ...product } = productForm

    this.productService.createProduct(product).subscribe(response => {
      const { id } = response
      variants.forEach(variant => {
        this.variantService.createVariant({ ...variant, type: "1", product: id })
          .subscribe(variantResponse => {
            console.log(variantResponse)
          })
      })
    })

  }


  trackByIndex(index: number) {
    return index
  }

}