// src/app/services/permission.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private baseUrl = 'http://127.0.0.1:8000/api/permissions';
  private rolesUrl = 'http://127.0.0.1:8000/api/roles';
  private usersUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) {}

  getPermissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPermission(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPermission(permission: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, permission);
  }

  updatePermission(id: number, permission: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, permission);
  }

  deletePermission(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  assignPermissionToRole(roleId: number, permissionId: number): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/roles/${roleId}/assign-permission`, { permissionId });
  }

  getPermissionsForRole(roleId: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/roles/${roleId}/permissions`);
  }

  getRoles(): Observable<any> {
    return this.http.get(this.rolesUrl);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  assignRoleToUser(userId: number, roleId: number): Observable<any> {
    return this.http.post(`${this.usersUrl}/${userId}/assign-role`, { roleId });
  }
}
