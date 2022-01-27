import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleado implements OnInit {


  minDate: Date;

  public empleadoForm = this.fb.group({

    nombre: [`${this.data.selected.nombre}`, Validators.required],
    // correo: [`${this.data.selected.correo}`],
    // telefono: [`${this.data.selected.telefono}`, Validators.required],
    // estado: [``, Validators.required],
    // ciudad: [``, Validators.required],
    // fecha_nacimiento: [`${this.data.selected.fecha_nacimiento}`, Validators.required],
    // uid: [`${this.data.selected.uid}`],
    // imagen: ['',Validators.required],
  })

  constructor(

    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router

  ) {
    this.minDate = new Date(1950, 0, 1)
  }

  ngOnInit(): void {
  }


  edit() {




    if (this.empleadoForm.status === 'INVALID') {
      return;
    }


    this.data.service.edit(this.empleadoForm.value)
      .subscribe((res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Exito!',
          text: 'Empleado actualizado correctamente',
          icon: 'success'
        })
      })
    this.router.navigateByUrl(`${this.data.service.path}`, { skipLocationChange: true });


  }


  isValidform = () => {
    console.log(this.empleadoForm);
    return this.empleadoForm.valid
  }

  isValidFormClass = () => !this.empleadoForm.valid ? 'disabled' : ''


}
