import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AppGuard implements CanActivate {
  token = false;
  user;
  constructor(private router: Router) {
  }
  LogIn() { this.token = true; }
  LogOut() { this.token = false; }
  canActivate() {
    this.token = (localStorage.getItem('token') == 'true');
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.token) {
      return this.token;
    }
    else {
      this.router.navigate(['/login']);
    }
  }
  SetUser(user: JSON) { this.user = user; }
  GetUser() { return this.user; }
}
