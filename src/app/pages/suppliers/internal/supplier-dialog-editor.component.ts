import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ISupplierResponse } from "src/app/core/suppliers/interfaces/supplier-response.interface";

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
    private dialogRef: DialogRef
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
    console.log(form.value)
    this.closeDialog('success')
  }

}