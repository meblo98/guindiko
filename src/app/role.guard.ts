import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = this.authService.getRole(); // Assurez-vous que cette méthode retourne le rôle de l'utilisateur

    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Redirigez vers une page non autorisée ou autre
      return false;
    }
  }
}
