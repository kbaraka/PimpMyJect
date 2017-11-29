import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../guard/app.guard';
import { WorkspaceGuard } from '../guard/workspace.guard';
import { LoginComponent } from '../login/login.component';
import { InvitationComponent } from '../invitation/invitation.component';
import { EquipesComponent } from './../equipes/equipes.component';
import { ListComponent } from './../equipes/list/list.component';
import { WorkspaceComponent } from './../equipes/workspace/workspace.component';
import { BacklogComponent } from './../equipes/workspace/backlog/backlog.component';
import { ProjectComponent } from '../project/project.component';
import {SprintComponent} from './../equipes/workspace/sprint/sprint.component';
import { CreateUserStoryComponent } from '../equipes/workspace/backlog/create-user-story/create-user-story.component';
import { ListUserStoryComponent } from './../equipes/workspace/backlog/list-user-story/list-user-story.component';
import { CreateSprintComponent } from './../equipes/workspace/create-sprint/create-sprint.component';

export const APP_ROUTES: Routes = [
  { path: 'invitation', canActivate: [AppGuard], component: InvitationComponent },
  { path: 'project', canActivate: [AppGuard], component: ProjectComponent },

  {
    path: 'equipes', canActivate: [AppGuard], component: EquipesComponent, children: [
      { path: '', component: ListComponent },
      {
        path: 'workspace', component: WorkspaceComponent, children: [
          {
            path: 'backlog', canActivate: [WorkspaceGuard], component: BacklogComponent, children: [

              { path: 'listUserStory', canActivate: [WorkspaceGuard], component: ListUserStoryComponent },
              { path: 'create-user-story', canActivate: [WorkspaceGuard], component: CreateUserStoryComponent }


            ]

          },
          { path: 'sprints', canActivate: [WorkspaceGuard], component: SprintComponent },
          { path: 'createsprint', canActivate: [WorkspaceGuard], component: CreateSprintComponent },

        ]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];
