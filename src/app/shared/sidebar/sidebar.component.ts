import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Empleado } from 'src/app/interfaces/empleado';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public empleadoActivo!: Empleado;
  modules: any[] = [];

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private _authService: AuthService) {
    this.modules = this.sidebarService.getModules();
  }


  ngOnInit(): void {
    // console.log(this._authService.empleadoActivo);
    // this.modules = this._modulesService.getModules();
  }
}
