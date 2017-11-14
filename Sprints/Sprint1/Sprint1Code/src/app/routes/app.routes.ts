import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../guard/app.guard';
import { LoginComponent } from '../login/login.component';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { EquipesComponent } from './../equipes/equipes.component';
export const APP_ROUTES: Routes = [
  { path: 'component1', canActivate: [AppGuard], component: Component1Component },
  { path: 'component2', canActivate: [AppGuard], component: Component2Component },
  { path: 'invitation', canActivate: [AppGuard], component: InvitationComponent },
  { path: 'equipes', canActivate: [AppGuard], component: EquipesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
