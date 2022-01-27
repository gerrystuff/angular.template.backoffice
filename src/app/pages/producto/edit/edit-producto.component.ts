import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editEstacion',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss']
})
export class EditProducto implements OnInit {


  public productoForm = this.fb.group({

    uid: [`${this.data.selected.title}`],

    // imagen: ['',Validators.required],


  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private router: Router) {
    console.log(this.data.selected)
  }

  ngOnInit(): void {

  }

  edit() {

    if (this.productoForm.status === 'INVALID') {
      return;
    }


    this.data.service.edit(this.productoForm.value)
      .subscribe((res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Exito!',
          text: 'Producto actualizado correctamente',
          icon: 'success'
        })
      })
    this.router.navigateByUrl(`${this.data.service.path}`, { skipLocationChange: true });


  }


  isValidform = () => {
    // console.log(this.estacionForm);
    return this.productoForm.valid
  }

  isValidFormClass = () => !this.productoForm.valid ? 'disabled' : ''

}
