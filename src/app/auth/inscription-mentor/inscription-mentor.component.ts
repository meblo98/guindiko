import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MentorService } from '../../services/mentor.service';

@Component({
  selector: 'app-inscription-mentor',
  standalone: true,
  imports: [],
  templateUrl: './inscription-mentor.component.html',
  styleUrl: './inscription-mentor.component.css'
})
export class InscriptionMentorComponent {

  mentorForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router
  ) {
    this.mentorForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numeroTelephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      domaineExpertise: ['', Validators.required],
      experience: ['', Validators.required],
      disponibilite: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  get f() { return this.mentorForm.controls; }

  passwordMatchValidator(frm: FormGroup) {
    return frm.get('password')?.value === frm.get('password_confirmation')?.value
      ? null : { mismatch: true };
  }

  // onSubmit() {
  //   if (this.mentorForm.invalid) {
  //     return;
  //   }

  //   this.isSubmitting = true;
  //   this.mentorService.registerMentor(
  //     this.f.nom.value,
  //     this.f.prenom.value,
  //     this.f.numeroTelephone.value,
  //     this.f.email.value,
  //     this.f.password.value,
  //     this.f.domaineExpertise.value,
  //     this.f.experience.value,
  //     this.f.disponibilite.value,
  //     this.f.password_confirmation.value
  //   ).subscribe(
  //     response => {
  //       this.isSubmitting = false;
  //       this.router.navigate(['/login']); // Redirigez vers une page de succès ou tableau de bord
  //     },
  //     error => {
  //       this.isSubmitting = false;
  //       this.errorMessage = error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.';
  //     }
  //   );
  // }
}
