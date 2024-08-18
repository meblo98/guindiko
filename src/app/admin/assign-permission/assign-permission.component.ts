// src/app/admin/assign-permission/assign-permission.component.ts
import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../../services/permission.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assign-permission',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './assign-permission.component.html',
  styleUrls: ['./assign-permission.component.css']
})
export class AssignPermissionComponent implements OnInit {
  roles: any[] = [];
  permissions: any[] = [];
  users: any[] = [];
  selectedRole: number | null = null;
  selectedPermission: number | null = null;
  selectedUser: number | null = null;

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.loadRoles();
    this.loadPermissions();
    this.loadUsers(); // Load users if needed
  }

  loadRoles(): void {
    // Assuming you have a method to get roles
    this.permissionService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe(data => {
      this.permissions = data;
    });
  }

  loadUsers(): void {
    // Assuming you have a method to get users
    this.permissionService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  assignPermissionToRole(): void {
    if (this.selectedRole !== null && this.selectedPermission !== null) {
      this.permissionService.assignPermissionToRole(this.selectedRole, this.selectedPermission)
        .subscribe(response => {
          alert('Permission assigned to role successfully!');
        }, error => {
          console.error('Error assigning permission to role', error);
        });
    }
  }

  assignRoleToUser(): void {
    if (this.selectedUser !== null && this.selectedRole !== null) {
      this.permissionService.assignRoleToUser(this.selectedUser, this.selectedRole)
        .subscribe(response => {
          alert('Role assigned to user successfully!');
        }, error => {
          console.error('Error assigning role to user', error);
        });
    }
  }
}
