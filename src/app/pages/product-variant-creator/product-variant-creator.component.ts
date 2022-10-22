import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { VariantService } from "src/app/core/variants/services/variant.service";

@Component({
  templateUrl: './product-variant-creator.component.html'
})
export class ProductVariantCreatorComponent implements OnInit {

  private variantCreatorForm!: FormArray
  public productId!: string

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private variantService: VariantService
  ) { }

  ngOnInit(): void {
    this.variantCreatorForm = this.formBuilder.array([
      this.formBuilder.group({
        description: this.formBuilder.control(''),
        size: this.formBuilder.control('Selecciona', [Validators.required, Validators.pattern(/[1-9]/g)]),
        quantity: this.formBuilder.control(0, [Validators.required, Validators.min(1)])
      })
    ])
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id') as string
    })
  }


  get variantsForm() {
    return this.variantCreatorForm.controls as any[]
  }
  get sizeVariantForm() {
    return this.variantCreatorForm.length
  }
  get indexVariantForm() {
    return (index: number) => {
      return this.variantCreatorForm.at(index)
    }
  }
  get isValidForm(): boolean {
    return this.variantCreatorForm.valid
  }

  public addVariantForm() {
    this.variantCreatorForm.push(
      this.formBuilder.group({
        description: this.formBuilder.control(''),
        size: this.formBuilder.control('Selecciona', [Validators.required, Validators.pattern(/[1-9]/g)]),
        quantity: this.formBuilder.control(0, [Validators.required, Validators.min(1)])
      })
    )
  }

  public removeVariantForm(index: number) {
    if (this.sizeVariantForm <= 1) return
    this.variantCreatorForm.removeAt(index)
  }

  public trackByIndex(index: number) {
    return index
  }

  public submitVariantForm() {
    if (!this.isValidForm) return
    const variants = this.variantCreatorForm.getRawValue()
    variants.forEach(variant => {
      this.variantService.createVariant({ ...variant, type: '1', product: this.productId })
        .subscribe(variantResponse => {
          console.log(variantResponse)
        })
    })
  }
}