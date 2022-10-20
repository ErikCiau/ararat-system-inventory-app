import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ISupplierResponse } from "../interfaces/supplier-response.interface";
import { SupplierService } from "../services/supplier.service";

@Injectable({ providedIn: 'root' })
export class SuppliersResolver implements Resolve<ISupplierResponse[]>{

  constructor(
    private supplierSerice: SupplierService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ISupplierResponse[] | Observable<ISupplierResponse[]> | Promise<ISupplierResponse[]> {
    return this.supplierSerice.allSuppliers()
  }


}