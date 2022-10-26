import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IEmployeeResponse } from "../interfaces/employee.interface";
import { EmployeeService } from "../services/employee.service";

@Injectable({ providedIn: 'root' })
export class EmployeeResolve implements Resolve<IEmployeeResponse[]> {

  constructor(
    private employeeService: EmployeeService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IEmployeeResponse[] | Observable<IEmployeeResponse[]> | Promise<IEmployeeResponse[]> {
    return this.employeeService.findAll()
  }

}