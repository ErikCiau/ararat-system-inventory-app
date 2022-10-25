import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry } from "rxjs";
import { environment } from 'src/environments/environment';
import { ISupplierResponse } from "../interfaces/supplier-response.interface";

@Injectable({ providedIn: 'root' })
export class SupplierService {
  constructor(private network: HttpClient) { }

  allSuppliers() {
    return this.network.get<ISupplierResponse[]>(`${environment.apiBase}/suppliers`).pipe(
      retry(5),
      catchError(error => {
        console.log(error)
        throw error
      })
    )
  }

  supplierCreator(supplier: { name: string, contact: string }) {
    return this.network.post<void>(`${environment.apiBase}/suppliers`, supplier).pipe(
      retry(1),
      catchError(err => {
        console.log(err)
        throw err
      })
    )
  }

}