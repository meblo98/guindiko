import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mentor',
  standalone: true,
  imports: [],
  templateUrl: './navbar-mentor.component.html',
  styleUrl: './navbar-mentor.component.css'
})
export class NavbarMentorComponent {
  
  constructor(private authService: AuthService, private router: Router) {}


  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Logout error', err);
      }
    });
  }
}
