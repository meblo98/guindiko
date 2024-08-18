import { Component } from '@angular/core';
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { SidebarNavigateComponent } from "../layouts/sidebar-navigate/sidebar-navigate.component";
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-user',
  standalone: true,
  imports: [SidebarComponent, SidebarNavigateComponent, FormsModule, RouterModule,CommonModule],
  templateUrl: './gestion-user.component.html',
  styleUrl: './gestion-user.component.css'
})
export class GestionUserComponent {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(
          () => {
            Swal.fire(
              'Supprimé !',
              'L\'utilisateur a été supprimé.',
              'success'
            );
            // Recharger la liste des utilisateurs après la suppression
            this.loadUsers();
          },
          error => {
            console.error('Erreur lors de la suppression de l\'utilisateur :', error);
            Swal.fire(
              'Erreur !',
              'Une erreur est survenue lors de la suppression.',
              'error'
            );
          }
        );
      }
    });
  }

  toggleStatus(user: any): void {
    const updatedStatus = !user.is_active;
    this.userService.updateUserStatus(user.id, updatedStatus).subscribe(() => {
      user.is_active = updatedStatus;
    }, error => {
      console.error('Erreur lors de la mise à jour du statut de l\'utilisateur :', error);
    });
  }

}
