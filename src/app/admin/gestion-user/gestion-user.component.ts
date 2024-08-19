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
  imports: [SidebarComponent, SidebarNavigateComponent, FormsModule, RouterModule, CommonModule],
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent {
  users: any[] = [];
  selectedRole: string | null = null;

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
            this.loadUsers();
          },
          (error: any) => {
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
    }, (error: any) => {
      console.error('Erreur lors de la mise à jour du statut de l\'utilisateur :', error);
    });
  }

  addUser(form: any): void {
    this.userService.createUser(form.value).subscribe(
      (response: any) => {
        Swal.fire(
          'Ajouté !',
          'L\'utilisateur a été ajouté avec succès.',
          'success'
        );
        this.loadUsers(); // Reload the list after adding a user
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        Swal.fire(
          'Erreur !',
          'Une erreur est survenue lors de l\'ajout.',
          'error'
        );
      }
    );
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.addUser(form);
    } else {
      Swal.fire('Erreur', 'Veuillez remplir tous les champs requis.', 'error');
    }
  }

  onRoleChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRole = selectElement.value;
  }
}
