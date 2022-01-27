import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { AddEmpleado } from './add/add-empleado.component';
import { EditEmpleado } from './edit/edit-empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  columns: string[] = [
    'status',
    'nombre',
    // 'correo',
    // 'telefono',
    // 'fecha_nacimiento',
    // 'estado',
    // 'ciudad'
  ]
  selected!: Empleado;
  empleados!: Empleado[];
  addComponent = AddEmpleado;
  editEmpleado = EditEmpleado;

  constructor(private empleadosService: EmpleadosService) { }
  ngOnInit(): void {

    this.cargarEmpleados();
  }

  private cargarEmpleados() {
    this.empleadosService.list()
      .subscribe((res: any) => {
        console.log(res)
        !res.error ?
          this.empleados = res.data :
          this.empleados = []
      })
  }

  setSelected = (empleado: Empleado) => this.selected = empleado;
  getSelected = () => this.selected;
  getTitle = () => this.empleadosService.title;
  getService = () => this.empleadosService;


  /** Styles */

  getStatusClass = (status: boolean) => status ? 'glowing-circle-active' : 'glowing-circle-down';

  getSelectedClass(empleado: Empleado) {

    if (this.selected == undefined) {
      return '';
    }
    if (empleado.nombre === this.selected.nombre) {
      return 'activeClass';
    }

    return '';
  }
}
