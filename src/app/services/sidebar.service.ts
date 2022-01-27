import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleI } from '../interfaces/modulo';
import { SubModuleI } from '../interfaces/submodulo';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  activeModule!: ModuleI | SubModuleI;
  title = "Side bar";


  private modules: Array<ModuleI> = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      class: 'module dashboard-tab',
      iconClass: 'home',
      subModules: {
        isEmpty: true,
        data: [],
      },
    },
    {
      name: 'Catalogos',
      path: 'catalogos',
      class: 'module catalogos-tab',
      iconClass: 'view_module',
      subModules: {
        isEmpty: false,
        data: [
          {
            name: 'Productos',
            path: 'catalogos/productos',
          }
        ],
      },
    },
    {
      name: "Configuración",
      path: 'configuracion',
      class: 'module configuracion-tab',
      iconClass: 'settings',
      subModules: {
        isEmpty: false,
        data: [
          {
            name: 'Empleados',
            path: 'configuracion/empleados'
          }
        ]
      }
    }
  ];

  constructor(private _router: Router) { }

  getModules = () => this.modules;
}
