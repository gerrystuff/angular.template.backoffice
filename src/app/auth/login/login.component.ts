import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
  hide = true;

  // public loginForm = this.fb.group({
  //   email: ['aguilarpadillaluisgerardo@gmail.com', [Validators.required, Validators.email]],
  //   password: ['123456', [Validators.required, Validators.minLength(6)]],
  //   remember: [false]
  // })


  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [localStorage.getItem('remember') || false]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _authService: AuthService
  ) { }


  invalidEmailMessage() {
    if (this.loginForm.get('email')!.hasError('required')) {
      return 'Ingrese correo electrónico';
    }

    return this.loginForm.get('email')!.hasError('email') ? 'Correo invalido' : '';
  }


  isValidPassword = () => {
    // console.log("PASS", this.loginForm.get('password')!.status === 'VALID')
    return this.loginForm.get('password')!.status === 'VALID';
  }

  isValidEmail = () => {
    // console.log("EMAIL", this.loginForm.get('email')!.status === 'VALID');
    return this.loginForm.get('email')!.status === 'VALID';
  }


  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.status === 'INVALID')
      return;

    this._authService.login({
      "correo": this.loginForm.value['email'],
      "password": this.loginForm.value['password']
    }).subscribe({

      //Status de resp debe ser 200
      next: c => {
        if (c.error) {

          console.log(c);
          Swal.fire({
            title: 'Error',
            text: c.msg,
            icon: 'error'
          })

          return;
        }

        //Si dio click en checkbox de recuerdame, se guarda su correo .

        if (this.loginForm.get('remember')!.value) {
          localStorage.setItem('email', this.loginForm.get('email')!.value)
          localStorage.setItem('remember', 'true');
        } else {
          localStorage.removeItem('email');
        }

        //Navegar a dashboard

        this.router.navigateByUrl('/');

      },
      //Status de resp debe ser 404
      error: error => {

        // console.log("to bad:>", error)
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: error.error.msg,
          icon: 'error'
        })


      },
      //Status de resp debe ser 200
      complete: () => {

      }
    }

    )

  }
}


