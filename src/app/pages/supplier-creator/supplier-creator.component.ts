import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { SupplierService } from "src/app/core/suppliers/services/supplier.service";

@Component({
  templateUrl: './supplier-creator.component.html'
})
export class SupplierCreatorComponent {

  public supplierForm = {
    name: '',
    contact: ''
  }

  constructor(
    private supplierService: SupplierService,
    private router: Router,
  ) { }

  public submitSupplierCreatorForm(form: NgForm) {
    if (!form.valid) return
    this.supplierService.supplierCreator(form.value).subscribe(() => {
      this.router.navigate(['/suppliers'])
    })
  }
}