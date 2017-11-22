import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../guard/app.guard';
import { WorkspaceGuard } from '../guard/workspace.guard';
import { LoginComponent } from '../login/login.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { EquipesComponent } from './../equipes/equipes.component';
import { ListComponent } from './../equipes/list/list.component';
import { WorkspaceComponent } from './../equipes/workspace/wrokspace.component';
import { BacklogComponent } from './../equipes/workspace/backlog/backlog.component';
import { ProjectComponent } from '../project/project.component';
export const APP_ROUTES: Routes = [
  { path: 'invitation', canActivate: [AppGuard], component: InvitationComponent },
  { path: 'project', canActivate: [AppGuard], component: ProjectComponent },

  {
    path: 'equipes', canActivate: [AppGuard], component: EquipesComponent, children: [
      { path: '', component: ListComponent },
      {
        path: 'workspace', component: WorkspaceComponent, children: [
          { path: 'backlog', canActivate: [WorkspaceGuard], component: BacklogComponent },
        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
