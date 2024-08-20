import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
        // Les informations utilisateur sont déjà stockées dans AuthService, inutile de les dupliquer ici.
        // Redirection basée sur le rôle
        if (this.authService.hasRole('admin')) {
          this.router.navigate(['/dashboard']);
        } else if (this.authService.hasRole('mentor')) {
          this.router.navigate(['/mentor']);
        } else if (this.authService.hasRole('menti')) {
          this.router.navigate(['/liste-mentor']);
        } else {
          this.errorMessage = "Rôle utilisateur non reconnu.";
        }
        console.log(response);
      },
      error: (err) => {
        this.errorMessage = "Erreur d'authentification. Veuillez vérifier vos identifiants.";
        console.error('Erreur lors de la tentative de connexion:', err);
      }
    });
  }
}
