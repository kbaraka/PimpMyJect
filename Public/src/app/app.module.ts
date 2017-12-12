import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './routes/app.routes';
import { AppGuard } from './guard/app.guard';
import { WorkspaceGuard } from './guard/workspace.guard';
import { LoginComponent } from './login/login.component';
import { InvitationComponent } from './invitation/invitation.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ListComponent } from './equipes/list/list.component';
import { WorkspaceComponent } from './equipes/workspace/workspace.component';
import { BacklogComponent } from './equipes/workspace/backlog/backlog.component';
import { ProjectComponent } from './project/project.component';
import { SprintComponent } from './equipes/workspace/sprint/sprint.component';
import { CreateUserStoryComponent } from './equipes/workspace/backlog/create-user-story/create-user-story.component';
import { ListUserStoryComponent } from './equipes/workspace/backlog/list-user-story/list-user-story.component';
import { CreateSprintComponent } from './equipes/workspace/create-sprint/create-sprint.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SprintworkspaceComponent } from './equipes/workspace/sprint/sprintworkspace/sprintworkspace.component';
import { SprintWorkspaceGuard } from './guard/sprintworkspace.guard';
import { ListertacheComponent } from './equipes/workspace/sprint/sprintworkspace/listertache/listertache.component';
import { ListersprintComponent } from './equipes/workspace/sprint/listersprint/listersprint.component';
import { ListeBuildComponent } from './equipes/workspace/sprint/sprintworkspace/liste-build/liste-build.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvitationComponent,
    EquipesComponent,
    ProjectComponent,
    ListComponent,
    WorkspaceComponent,
    BacklogComponent,
    SprintComponent,
    CreateUserStoryComponent,
    ListUserStoryComponent,
    CreateSprintComponent,
    SprintworkspaceComponent,
    ListertacheComponent,
    ListersprintComponent,
    ListeBuildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true }
    )
  ],
  providers: [AppGuard, WorkspaceGuard, SprintWorkspaceGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
