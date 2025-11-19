import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private basicUrl: string = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202520_S4_P2_Practica/refs/heads/main/json/';
  private localUrl: string = 'http://localhost:4200/emprendedores';


  getEmprendedores() {
    return this.http.get<any[]>(this.localUrl);
  }   

  
  getEmprendedoresBasis() {
    return this.http.get<any[]>(this.basicUrl+'emprendedores.json');
  }
  getEmprendedor(id: number) {
    return this.http.get<any>(`${this.basicUrl}/${id}`+'emprendedor.json');
  }


  constructor(public http: HttpClient) {
    this.getEmprendedoresBasis();
   }
}
