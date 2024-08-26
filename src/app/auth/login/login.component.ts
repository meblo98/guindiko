import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // corrected to "styleUrls"
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = null; // Réinitialiser le message d'erreur à chaque tentative de connexion
  
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => {
        console.log('API Response:', response);
      
        // Continuez avec la redirection basée sur le rôle
        if (this.authService.hasRole('admin')) {
          console.log('Redirection vers /dashboard');
          this.router.navigate(['/dashboard']);
        } else if (this.authService.hasRole('mentor')) {
          console.log('Redirection vers /dashboard-mentor');
          this.router.navigate(['/dashboard-mentor']);
        } else if (this.authService.hasRole('menti')) {
          console.log('Redirection vers /accueil-mentee');
          this.router.navigate(['/accueil-mentee']);
        } else {
          this.errorMessage = "Rôle utilisateur non reconnu.";
        }
      },
      error: (err) => {
        // Gestion des erreurs d'authentification
        if (err.status === 403) {
          this.errorMessage = err.error.error;  // Utiliser le message d'erreur provenant de la réponse backend
        } else {
          this.errorMessage = "Erreur d'authentification. Veuillez vérifier vos identifiants.";
        }
        console.error('Erreur lors de la tentative de connexion:', err);
      }
    });
  }

}
