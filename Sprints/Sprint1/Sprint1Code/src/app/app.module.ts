import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './routes/app.routes';
import { AppGuard } from './guard/app.guard';
import { LoginComponent } from './login/login.component';

import { InvitationComponent } from './invitation/invitation.component';
import { EquipesComponent } from './equipes/equipes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvitationComponent,
    EquipesComponent,
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
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
