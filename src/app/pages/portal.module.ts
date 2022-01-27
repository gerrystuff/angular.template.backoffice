import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Custom Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortalComponent } from './portal.component';
import { ProductoComponent } from './producto/producto.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { EmpleadosComponent } from './empleados/empleados.component';

//CRUDS
import { AddProducto } from './producto/add/add-producto.component';
import { EditProducto } from './producto/edit/edit-producto.component';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material Design
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { AddEmpleado } from './empleados/add/add-empleado.component';
import { EditEmpleado } from './empleados/edit/edit-empleado.component';







@NgModule({
  declarations: [
    DashboardComponent,

    PortalComponent,
    CatalogosComponent,

    ProductoComponent,
    EmpleadosComponent,

    AddProducto,
    EditProducto,
    AddEmpleado,
    EditEmpleado
  ],
  exports: [
    PortalComponent,
    DashboardComponent,
    ProductoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,

    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class PortalModule { }
