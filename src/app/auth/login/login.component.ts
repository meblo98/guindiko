import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe(response => {
      // Gérer la redirection après connexion en fonction du rôle
      if (this.authService.hasRole('admin')) {
        this.router.navigate(['/admin']);
      } else if (this.authService.hasRole('mentor')) {
        this.router.navigate(['/mentor']);
      } else if (this.authService.hasRole('menti')) {
        this.router.navigate(['/menti']);
      }
    });
  }
}
