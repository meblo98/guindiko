import { Component, OnInit } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";
import { RdvService } from '../../services/rdv.service';
import { CommonModule } from '@angular/common';
import { FormRDVComponent } from "../form-rdv/form-rdv.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-liste-rdv',
  standalone: true,
  imports: [NavbarMentorComponent, CommonModule, FormRDVComponent, FormsModule],
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRDVMentorComponent implements OnInit{

  rendezVous: any[] = [];
  isEditMode: boolean = false;
  selectedRdv: any = null;

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {
    this.rdvService.getRendezVousPourMentor().subscribe({
      next: (response) => {
        this.rendezVous = response;
        console.log('Rendez-vous:', this.rendezVous);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des rendez-vous:', err);
      }
    });
  }

  enterEditMode(rdv: any): void {
    this.isEditMode = true;
    this.selectedRdv = { ...rdv };
  }

   // Méthode pour sauvegarder les changements
   saveChanges() {
    // Appliquer les modifications à l'objet rdv original
    const index = this.rendezVous.findIndex((item: any) => item.id === this.selectedRdv.id);
    if (index !== -1) {
      this.rendezVous[index] = { ...this.selectedRdv };
    }
    // Sortir du mode édition
    this.isEditMode = false;
    this.selectedRdv = null;
  }

  // Méthode pour annuler l'édition
  cancelEdit() {
    this.isEditMode = false;
    this.selectedRdv = null;
  }

}
