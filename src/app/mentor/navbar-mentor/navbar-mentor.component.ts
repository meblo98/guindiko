import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NotificationComponent } from "../../notification/notification.component";

@Component({
  selector: 'app-navbar-mentor',
  standalone: true,
  imports: [RouterLink, NgClass, NotificationComponent],
  templateUrl: './navbar-mentor.component.html',
  styleUrl: './navbar-mentor.component.css'
})
export class NavbarMentorComponent {

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
