import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-user',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './gestion-user.component.html',
  styleUrl: './gestion-user.component.css'
})
export class GestionUserComponent {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(() => {
        // Recharger la liste des utilisateurs après la suppression
        this.loadUsers();
      }, error => {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      });
    }
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
