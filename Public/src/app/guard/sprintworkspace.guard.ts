import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SprintWorkspaceGuard implements CanActivate {
    sprint = null;
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.sprint = JSON.parse(localStorage.getItem('currentsprint'));
        // tslint:disable-next-line:curly
        if (this.sprint) return true;
        // tslint:disable-next-line:curly
        else return false;
    }
}
