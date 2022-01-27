import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ServiceI } from '../../../services/service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addEmpleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleado implements OnInit {
  selected!: string;
  public empleadoForm: FormGroup;
  minDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.minDate = new Date(1950, 0, 1)
    this.empleadoForm = this.fb.group(
      this.data.service.getFormGroup()
    )
  }

  ngOnInit(): void {
  }



  isValidform = () => this.empleadoForm.valid


  isValidFormClass = () => !this.empleadoForm.valid ? 'disabled' : ''



  add() {

    this.empleadoForm.controls['password'].setValue(this.empleadoForm.get('correo')!.value);
    this.data.service.add(this.empleadoForm.value)
      .subscribe((res: any) => {

        Swal.fire({
          title: 'Exito!',
          text: `${res.msg}`,
          icon: 'success',
        })

        this.router.navigateByUrl(`${this.data.service.path}`, { skipLocationChange: true });

      }, (err: any) => {

        console.log(err)
        Swal.fire({
          title: 'Error!',
          text: `${err.error.msg}`,
          icon: 'error',
        })
      });
  }


}
