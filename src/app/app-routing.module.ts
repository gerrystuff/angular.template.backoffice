import { PortalRoutingModule } from './pages/portal.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  // { path: '**', component: '' W},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, PortalRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
