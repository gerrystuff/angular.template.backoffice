import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';
import { ModuleI } from '../../../interfaces/modulo';
@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  @Input() module!: ModuleI;
  subModules: boolean = false;

  constructor(private _modulesService: SidebarService, private _router: Router) {

  }

  ngOnInit(): void {
    // this.modulePath = `/home/${this.module.path}`
  }



  activeModule() {
    console.log("this..")
    this._router.navigateByUrl(`/${this.module.path}`, { skipLocationChange: false })

    // })
    // this._modulesService.activeModule = this.module;
  }


  expandSubModules(event: MouseEvent) {
    console.log("expand..");
    event.preventDefault();

    this.subModules = !this.subModules;
  }



  openSubModulesStyle() {
    return this.subModules ? 'subModulesOn' : 'subModulesOff';
  }

  isExpanded() {
    return this.subModules ? 'module-expand' : 'module-close';
  }

}



// [ngStyle]="{'color': isSelected()}"