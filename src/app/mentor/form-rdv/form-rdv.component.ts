import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RdvService } from '../../services/rdv.service';

@Component({
  selector: 'app-form-rdv',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRDVComponent {

  rendezVousForm!: FormGroup;
  showLieu = true;
  showLien = false;
  mentes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router,
    private rendezVousService: RdvService
  ) {}

  ngOnInit(): void {
    this.rendezVousForm = this.fb.group({
      sujet: ['', Validators.required],
      type: ['', Validators.required],
      date_rendezVous: ['', Validators.required],
      lieu: [''],
      lien: [''],
      duree: [''],
      mente_id: ['', Validators.required],
      statut: ['']
    });

    this.loadMentes();
  }

  onTypeChange(event: any): void {
    const selectedType = event.target.value;
    this.showLieu = selectedType === 'présentiel';
    this.showLien = selectedType === 'En Ligne';
  }

  loadMentes(): void {
    this.mentorService.getAcceptedRequestsForMentor().subscribe({
      next: (response) => {
        this.mentes = response.mente; // Assurez-vous que 'mentes' est bien le nom de la clé
        console.log('Mentes:', this.mentes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des mentes:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.rendezVousForm.valid) {

      this.rendezVousService.createRendezVous(this.rendezVousForm.value).subscribe(
        (response: any) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Votre rendez-vous a été enregistré avec succès',
            showConfirmButton: false,
            timer: 1500
          });
          location.reload();
        },
        (error: any) => {
          console.error('Erreur lors de l\'envoi des données :', error);
          Swal.fire(
            'Erreur',
            'Une erreur est survenue lors de l\'enregistrement. Veuillez réessayer.',
            'error'
          );
        }
      );
    } else {
      Swal.fire('Erreur', 'Veuillez remplir tous les champs requis.', 'error');
    }
  }



}
