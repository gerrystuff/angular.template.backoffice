import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Material Design
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogoHeaderComponent } from './catalogo-header/catalogo-header.component';
import { ModuleComponent } from './sidebar/module/module.component';
import { ModuleHeaderComponent } from './module-header/module-header.component';


@NgModule({
  declarations: [
    CatalogoHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ModuleComponent,
    ModuleHeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  exports: [
    CatalogoHeaderComponent,
    NavbarComponent,
    SidebarComponent,
    ModuleComponent,
    ModuleHeaderComponent,
  ]
})
export class SharedModule { }
