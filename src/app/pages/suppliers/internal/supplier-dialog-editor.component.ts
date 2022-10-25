import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ISupplierResponse } from "src/app/core/suppliers/interfaces/supplier-response.interface";
import { SupplierService } from "src/app/core/suppliers/services/supplier.service";

@Component({
  templateUrl: './supplier-dialog-editor.component.html',
})
export class SupplierDialogEditorComponent implements OnInit {

  public supplierForm = {
    name: '',
    contact: '',
  }

  private supplierData!: ISupplierResponse

  constructor(
    private dialogRef: DialogRef,
    private supplierService: SupplierService,
  ) { }

  ngOnInit(): void {
    this.supplierData = this.dialogRef.config.data.supplier as ISupplierResponse
    this.supplierForm.name = this.supplierData.name
    this.supplierForm.contact = this.supplierData.contact
  }

  public closeDialog(event: 'success' | 'cancel') {
    this.dialogRef.close(event)
  }

  public submitSupplierForm(form: NgForm) {
    if (!form.valid) return
    this.supplierService.editSupplier(String(this.supplierData.id), form.value).subscribe(
      () => {
        this.closeDialog('success')
      })
  }
}