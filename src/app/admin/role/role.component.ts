import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
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
        this.loadRoles();  // Recharger la liste des rôles
        this.resetForm();
      });
    } else {
      // Créer un nouveau rôle
      this.roleService.createOrUpdateRole(this.role).subscribe(() => {
        this.loadRoles();  // Recharger la liste des rôles
        this.resetForm();
      });
    }
  }

  editRole(role: any): void {
    this.role = { ...role };  // Copier les données du rôle pour modification
    this.editing = true;
  }

  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(() => {
      this.loadRoles();  // Recharger la liste des rôles après suppression
    });
  }

  resetForm(): void {
    this.role = { name: '', id: null };  // Réinitialiser le formulaire
    this.editing = false;
  }
}
