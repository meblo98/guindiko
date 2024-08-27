import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole(); 

    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Redirigez vers une page non autorisée ou autre
      return false;
    }
  }
}
