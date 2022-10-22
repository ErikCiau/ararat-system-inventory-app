import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './supplier.component.html',
  styles: [],
})
export class SupplierComponent implements OnInit {
  public suppliers: any[] = []
  constructor(
    private activatedRoute: ActivatedRoute
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
      this.suppliers = (suppliers as any[])
    })
  }

  public trackByIndex(i: number) {
    return i
  }
}