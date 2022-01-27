// import { ErrorPageComponent } from './shared/error-page/error-page.component';
// import { PagesModule } from './../pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PortalModule } from './pages/portal.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    // ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    AuthModule,


  ],

  // providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
