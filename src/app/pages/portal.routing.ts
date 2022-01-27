import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalComponent } from './portal.component';
import { ProductoComponent } from './producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
    {
        path: 'portal',
        component: PortalComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'catalogos',
                children: [
                    { path: '', component: DashboardComponent, data: { titulo: 'catalogos' } },
                    { path: 'productos', component: ProductoComponent, data: { titulo: 'producto' } },
                ]
            },
            {
                path: 'configuracion',
                // component: DashboardComponent,
                children: [
                    { path: 'empleados', component: EmpleadosComponent, data: { titulo: 'Empleados' } },
                ]

            }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
