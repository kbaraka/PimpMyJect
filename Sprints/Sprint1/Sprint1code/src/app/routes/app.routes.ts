import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../guard/app.guard';
import { LoginComponent } from '../login/login.component';
export const APP_ROUTES: Routes = [


  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];
