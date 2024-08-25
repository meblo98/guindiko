import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription-mentor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './inscription-mentor.component.html',
  styleUrls: ['./inscription-mentor.component.css']
})
export class InscriptionMentorComponent {

  users: any[] = [];
  selectedRole: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  addUser(form: any): void {
    this.userService.createUser(form.value).subscribe(
      (response: any) => {
        Swal.fire(
          'Ajouté !',
          'L\'utilisateur a été ajouté avec succès.',
          'success'
        );
        this.router.navigate(['/login']);
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
