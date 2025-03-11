import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  canActivate(): boolean {
        // a sample routing guard is presented here
        // if ( token ) {
        //    if ( token == jwtStringKey) {
        //       return true  }
        //    else {
        //       this.router.navigate(['/login])}
        
    return true; // For now, all routes are accessible
  }



  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
