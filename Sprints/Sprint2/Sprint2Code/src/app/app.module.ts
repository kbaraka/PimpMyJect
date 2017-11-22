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
import { WorkspaceComponent } from './equipes/workspace/wrokspace.component';
import { BacklogComponent } from './equipes/workspace/backlog/backlog.component';
import { ProjectComponent } from './project/project.component';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true }
    )
  ],
  providers: [AppGuard, WorkspaceGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
