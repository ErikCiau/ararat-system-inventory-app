import { Dialog } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISupplierResponse } from "src/app/core/suppliers/interfaces/supplier-response.interface";
import { SupplierDialogEditorComponent } from "./internal/supplier-dialog-editor.component";

@Component({
  templateUrl: './supplier.component.html',
  styles: [],
})
export class SupplierComponent implements OnInit {
  public suppliers: ISupplierResponse[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: Dialog,
  ) { }

  public tableTitles: string[] = [
    '#',
    'Nombre',
    'Contacto',
    'Creado',
    'Actualizado',
    'Opciones'
  ]

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ suppliers }) => {
      this.suppliers = (suppliers as ISupplierResponse[])
    })
  }

  // TODO: implement rerender resolvers
  public openDialogEditor(supplier: ISupplierResponse) {
    const dialog = this.dialog.open(SupplierDialogEditorComponent, {
      data: {
        supplier
      }
    })

    dialog.closed.subscribe(event => {
      console.log(event)
    })
  }

  public trackByIndex(i: number) {
    return i
  }
}