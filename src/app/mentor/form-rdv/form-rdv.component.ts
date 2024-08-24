import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-rdv',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRDVComponent {

  rendezVousForm!: FormGroup; // Utilisation de l'opérateur de déclaration d'initialisation
  showLieu = true;
  showLien = false;
  mentes: any[] = [];

  constructor(private fb: FormBuilder, private mentorService: MentorService) {}

  ngOnInit(): void {
    this.rendezVousForm = this.fb.group({
      sujet: [''],
      type: [''],
      lieu: [''],
      lien: [''],
      duree: [''],
      mente_id: [''],
      statut: ['']
    });

    this.loadMentes();
  }

  onTypeChange(event: any): void {
    const selectedType = event.target.value;
    if (selectedType === 'présentiel') {
      this.showLieu = true;
      this.showLien = false;
    } else if (selectedType === 'En Ligne') {
      this.showLieu = false;
      this.showLien = true;
    }
  }


  loadMentes(): void {
    this.mentorService.getAcceptedRequestsForMentor().subscribe({
      next: (response) => {
        this.mentes = response; // Assurez-vous que 'mentes' est bien le nom de la clé
        console.log('Mentes:', this.mentes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des mentes:', error);
      }
    });
  }


  onSubmit(): void {
    if (this.rendezVousForm.valid) {
      // Handle form submission
      console.log(this.rendezVousForm.value);
    }
  }

}
