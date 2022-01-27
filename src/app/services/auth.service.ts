import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, of } from "rxjs";
import { Empleado } from "../interfaces/empleado";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private baseUrl = environment.base_url;
    // private _empleadoActivo!: Empleado;


    // get empleadoActivo(): any {
    //     return { ...this._empleadoActivo };
    // }

    constructor(private http: HttpClient) {

    }


    get headers() {
        return {
            headers: {
                'x-token': this.token

            }
        }
    }



    get token() {
        return localStorage.getItem('token') || '';
    }


    validarToken(): Observable<boolean> {

        return this.http.get(`${this.baseUrl}/admin/auth/renew`, {
            headers: {
                'x-token': localStorage.getItem('token') || ''

            }
        }).pipe(
            tap((resp: any) => {
                localStorage.setItem('token', resp.token)
            }),
            map(resp => true),
            catchError(error => of(false)));
    }


    // verificarAutenticacion(): Observable<boolean> {
    //     if (!localStorage.getItem('token')) {
    //         return of(false)
    //     }

    //     const url = `${this.baseUrl}/admin/empleados/${localStorage.getItem('empleadoActivo')}`

    //     return this.http.get(url, this.headers).pipe(
    //         tap((resp: any) => localStorage.setItem('empleadoActivo', resp.datos.uid)),
    //         // tap((resp: any) => this._empleadoActivo = resp.datos)
    //     )
    // }

    login(empleado: Object): Observable<any> {

        const url = `${this.baseUrl}/admin/auth/login`
        return this.http.post(url, empleado)
            .pipe(
                tap((resp: any) => localStorage.setItem('token', resp.token)),
                // tap((resp: any) => localStorage.setItem('empleadoActivo', resp.datos.uid)),
                // tap((resp: any) => this._empleadoActivo = resp.datos)
            )
    }


    logout() {
        localStorage.removeItem('token');
    }


}