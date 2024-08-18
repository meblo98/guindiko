import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: any = {
    nom: '',
    prenom: '',
    email: '',
    numeroTelephone: '',
    is_active: false,
    roles: []
  };
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.isLoading = true;
      this.userService.getUserById(+userId).subscribe(
        (data) => {
          this.user = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error fetching user data:', error);
          this.isLoading = false;
          this.error = 'Failed to load user data';
        }
      );
    }
  }

  onSubmit(): void {
    if (this.user.id) {
      this.isLoading = true;
      this.userService.updateUser(this.user.id, this.user).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/user']);
        },
        (error) => {
          console.error('Error updating user:', error);
          this.isLoading = false;
          this.error = 'Failed to update user';
        }
      );
    }
  }
}
