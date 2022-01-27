import { Observable } from 'rxjs';
export interface ServiceI {
    title: string;
    path: string;


    add(product: any): Observable<any>;
    list(): Observable<any>;
    edit(product: any): Observable<any>;
    changeStatus(id: number, status: boolean): Observable<any>;
    getFormGroup(): any;
    listbyUid(uid: any): any;
}