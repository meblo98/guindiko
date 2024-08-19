import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../../services/permission.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-permission',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './permission.component.html',
  styleUrl: './permission.component.css'
})
export class PermissionsComponent implements OnInit {
  permissions: any[] = [];
  selectedPermission: any = null;
  newPermission: any = { name: '' };

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.loadPermissions();
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe(data => {
      this.permissions = data;
    });
  }

  viewPermission(id: number): void {
    this.permissionService.getPermission(id).subscribe(data => {
      this.selectedPermission = data;
    });
  }

  createPermission(): void {
    this.permissionService.createPermission(this.newPermission).subscribe(response => {
      alert('Permission created successfully!');
      this.loadPermissions();
      this.newPermission = { name: '' };
    });
  }

  updatePermission(id: number): void {
    this.permissionService.updatePermission(id, this.selectedPermission).subscribe(response => {
      alert('Permission updated successfully!');
      this.loadPermissions();
      this.selectedPermission = null;
    });
  }

  deletePermission(id: number): void {
    this.permissionService.deletePermission(id).subscribe(response => {
      alert('Permission deleted successfully!');
      this.loadPermissions();
    });
  }
}
