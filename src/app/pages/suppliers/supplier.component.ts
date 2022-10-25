import { Dialog } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private router: Router,
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

  public openDialogEditor(supplier: ISupplierResponse) {
    const dialog = this.dialog.open(SupplierDialogEditorComponent, {
      data: {
        supplier
      }
    })

    dialog.closed.subscribe(event => {
      if (event === 'success') {
        this.reloadResolver()
      }
    })
  }

  public trackByIndex(i: number) {
    return i
  }

  private reloadResolver() {
    this.router.navigated = false
    this.router.navigate([this.activatedRoute.parent?.url])
  }
}