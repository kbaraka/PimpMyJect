import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../guard/app.guard';
import { LoginComponent } from '../login/login.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { EquipesComponent } from './../equipes/equipes.component';
import { ProjectComponent } from './../project/project.component';
export const APP_ROUTES: Routes = [

  { path: 'invitation', canActivate: [AppGuard], component: InvitationComponent },
  { path: 'equipes', canActivate: [AppGuard], component: EquipesComponent },
  { path: 'project', canActivate: [AppGuard], component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];
