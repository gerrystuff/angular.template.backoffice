import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Empleado } from "../interfaces/empleado";
import { ServiceI } from "./service";

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService implements ServiceI {
  base_url = environment.base_url;
  title: string;
  path: string;


  constructor(private http: HttpClient) {
    this.title = 'Empleados'
    this.path = 'quickgas/configuracion/empleados'
  }
  edit(empleado: Empleado): Observable<any> {
    const url = `${this.base_url}/admin/empleados/editar`
    return this.http.post(url, empleado, this.headers);
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

  add(empleado: Empleado): Observable<any> {
    const url = `${this.base_url}/admin/empleados`
    return this.http.post(url, empleado, this.headers)
  }
  list(): Observable<any> {

    const url = `${this.base_url}/admin/empleados`

    return of({
      "error": false,
      "data": [
        {
          "status": true,
          "nombre": "Luis Gerardo Aguilar Padilla"
        }
      ]
    }
    )
    // return this.http.get<any>(url, this.headers);
  }
  changeStatus(id: number, status: boolean): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getFormGroup() {
    return {
      // nombre: ['' ,[Validators.required]],
      // correo:[''  ,[Validators.required,Validators.email]],
      // telefono:['',[Validators.required, Validators.minLength(10)]],
      // estado:[''  ,[Validators.required]] ,
      // ciudad:[''  ,[Validators.required]],
      // password:[''],
      // fecha_nacimiento:['',[Validators.required]],

      nombre: ['Gerardo Padilla', [Validators.required]],

      // correo:['luisgerardoaguilarpadilla@gmail.com',[Validators.required,Validators.email]],
      // telefono:[6462590576,[Validators.required, Validators.minLength(10)]],
      // estado:['',[Validators.required]] ,
      // ciudad:['',[Validators.required]],
      // password:[''],
      // fecha_nacimiento:['',[Validators.required]],
    }
  }


  listbyUid(uid: any) {
    throw new Error("Method not implemented.");
  }

}