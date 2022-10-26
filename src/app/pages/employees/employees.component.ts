import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEmployeeResponse } from "src/app/core/employees/interfaces/employee.interface";

@Component({
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
  public tableTitles: string[] = [
    '#',
    'Usuario',
    'Nombre',
    'Contacto',
    'Rol',
    'Creado',
    'Actualizado',
    'Opciones',
  ]

  public employees!: IEmployeeResponse[]

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ employees }) => {
      this.employees = employees as IEmployeeResponse[]
    })
  }

  public trackByIndex(id: number) {
    return id
  }

}