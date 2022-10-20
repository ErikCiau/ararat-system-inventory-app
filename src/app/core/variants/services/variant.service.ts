import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class VariantService {

  constructor(
    private network: HttpClient
  ) { }

  createVariant(variant: any) {
    return this.network.post(`${environment.apiBase}/variants`, variant)
  }

}