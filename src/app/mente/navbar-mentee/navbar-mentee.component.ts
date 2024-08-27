import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-navbar-mentee',
  standalone: true,
  imports: [RouterLink, NgClass,NotificationComponent],
  templateUrl: './navbar-mentee.component.html',
  styleUrl: './navbar-mentee.component.css'
})
export class NavbarMenteeComponent {


  constructor(private authService: AuthService, private router: Router) {}

  isDropdownOpen = false;
  isNotificationDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleNotificationDropdown(): void {
    this.isNotificationDropdownOpen = !this.isNotificationDropdownOpen;
  }

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
