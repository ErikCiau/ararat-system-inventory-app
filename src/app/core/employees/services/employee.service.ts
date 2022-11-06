import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry } from "rxjs";
import { environment } from 'src/environments/environment'
import { IEmployeeResponse, IRegisterEmployee } from "../interfaces/employee.interface";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(
    private network: HttpClient
  ) { }

  findAll() {
    return this.network.get<IEmployeeResponse[]>(`${environment.apiBase}/employees`).pipe(
      retry(5),
      catchError(err => {
        console.log(err)
        throw err
      })
    )
  }

  register(employeeData: IRegisterEmployee) {
    return this.network.post(`${environment.apiBase}/auth/sign-on`, employeeData).pipe(
      retry(1),
      catchError(err => {
        console.log(err)
        throw err
      })
    )
  }

}