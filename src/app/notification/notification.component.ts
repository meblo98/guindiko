import { Component, inject, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{

  notifications: any[] = [];
  router= inject(Router);
  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(
      (data) => {
        this.notifications = data;
        console.log(this.notifications);

      },
      (error) => {
        console.error('Erreur lors de la récupération des notifications :', error);
      }
    );
  }


  onNotificationClick(notification: any) {
    this.notificationService.markNotificationAsRead(notification.id).subscribe({
      next: () => {
        // Redirection en fonction du type de notification
        if (notification.rendez_vous_id) {
          this.router.navigate(['/mentor-rdv']);
        } else if (notification.demande_mentorat_id) {
          this.router.navigate(['/mentor-demande']);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de la notification:', err);
      }
    });
  }


}
