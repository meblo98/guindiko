import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-sidebar-navigate',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-navigate.component.html',
  styleUrls: ['./sidebar-navigate.component.css']
})
export class SidebarNavigateComponent {
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
