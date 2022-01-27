import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ServiceI } from '../../../services/service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addProducto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProducto implements OnInit {

  public productoForm = this.fb.group(
    this.data.service.getFormGroup()
  )


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router,
  ) { }
  selected!: string;
  ngOnInit(): void {
  }

  add() {

    if (this.productoForm.status === 'INVALID') {
      return;
    }

    this.data.service.add(this.productoForm.value)
      .subscribe((res: any) => {
        console.log
        Swal.fire({
          title: 'Exito!',
          text: `Producto añadido correctamente`,
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


  isValidForm = () => this.productoForm.valid

  isValidFormClass = () => !this.productoForm.valid ? 'disabled' : ''
}
