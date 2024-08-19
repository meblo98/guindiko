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
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null; // Declare the errorMessage property

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('roles', JSON.stringify(response.user.roles));

        // Redirect the user based on their role
        if (this.authService.hasRole('admin')) {
          this.router.navigate(['/dashboard']);
        } else if (this.authService.hasRole('mentor')) {
          this.router.navigate(['/mentor']);
        } else if (this.authService.hasRole('menti')) {
          this.router.navigate(['/menti']);
        }
      },
      error: (err) => {
        this.errorMessage = "Erreur d'authentification. Veuillez vérifier vos identifiants.";
      }
    });
  }
}
