import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkspaceGuard implements CanActivate {
  equipe = null;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.equipe = JSON.parse(localStorage.getItem('currentequipe'));
    // tslint:disable-next-line:curly
    if (this.equipe) return true;
    // tslint:disable-next-line:curly
    else return false;
  }
}
