import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roles: any[] = [];
  role = { name: '', id: null };  // L'objet rôle pour le formulaire
  editing = false;  // Pour suivre si un rôle est en cours de modification

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  onSubmit(): void {
    if (this.editing) {
      // Mettre à jour le rôle existant
      this.roleService.createOrUpdateRole(this.role).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Rôle mis à jour avec succès !',
        });
        this.loadRoles();  // Recharger la liste des rôles
        this.resetForm();
      }, () => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de la mise à jour du rôle.',
        });
      });
    } else {
      // Créer un nouveau rôle
      this.roleService.createOrUpdateRole(this.role).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Rôle créé avec succès !',
        });
        this.loadRoles();  // Recharger la liste des rôles
        this.resetForm();
      }, () => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de la création du rôle.',
        });
      });
    }
  }

  editRole(role: any): void {
    this.role = { ...role };  // Copier les données du rôle pour modification
    this.editing = true;
  }

  deleteRole(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService.deleteRole(id).subscribe(() => {
          Swal.fire(
            'Supprimé !',
            'Le rôle a été supprimé.',
            'success'
          );
          this.loadRoles();  // Recharger la liste des rôles après suppression
        }, () => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur est survenue lors de la suppression du rôle.',
          });
        });
      }
    });
  }

  resetForm(): void {
    this.role = { name: '', id: null };  // Réinitialiser le formulaire
    this.editing = false;
  }
}
