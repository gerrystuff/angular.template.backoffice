import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ServiceI } from './service';
import { Producto } from '../interfaces/producto';
import { environment } from '../../environments/environment';
import { Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductoService implements ServiceI {

  base_url = environment.base_url;
  title: string;
  path: string;

  constructor(private http: HttpClient) {
    this.title = "Producto"
    this.path = "portal/catalogos/productos"
  }
  listbyUid(uid: any) {
    throw new Error('Method not implemented.');
  }
  getFormGroup() {
    return {
      title: ['', [Validators.required]]
    }
  }

  get token(): string {
    return localStorage.getItem('token') || '';
  }


  get headers() {
    return {
      headers: {
        'x-token': this.token

      }
    }
  }



  list(): Observable<any> {

    const url = `${this.base_url}/portal/productos`;

    return of({
      error: false,
      data: [
        {
          "status": true,
          "title": "Producto 1"
        }
      ]
    })
    // return this.http.get<any>(url, this.headers);
  }


  add(producto: Producto): Observable<any> {
    const url = `${this.base_url}/portal/productos`
    return this.http.post<any>(url, producto, this.headers);
  }

  edit(producto: Producto): any {
    const url = `${this.base_url}/portal/productos/editar`
    return this.http.post(url, producto, this.headers);
  }

  changeStatus(id: number, state: boolean): Observable<any> {

    const url = `${this.base_url}/portal/productos/status/${id}`
    return this.http.put<any>(url, { "status": state }, this.headers);
  }

}


