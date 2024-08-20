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
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('roles', JSON.stringify(response.user.roles));
        localStorage.setItem('user', JSON.stringify(response.user)); // Stocker toutes les infos utilisateur
  
        // Redirection basée sur le rôle
        if (this.authService.hasRole('admin')) {
          this.router.navigate(['/dashboard']);
        } else if (this.authService.hasRole('mentor')) {
          this.router.navigate(['/mentor']);
        } else if (this.authService.hasRole('mentee')) {
          this.router.navigate(['/liste-mentor']);
        }
        console.log(response);
      },
      error: (err) => {
        this.errorMessage = "Erreur d'authentification. Veuillez vérifier vos identifiants.";
      }
    });
  }
  
}
