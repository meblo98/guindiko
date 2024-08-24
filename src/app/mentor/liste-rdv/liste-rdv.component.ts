import { Component, OnInit } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";
import { RdvService } from '../../services/rdv.service';
import { CommonModule } from '@angular/common';
import { FormRDVComponent } from "../form-rdv/form-rdv.component";

@Component({
  selector: 'app-liste-rdv',
  standalone: true,
  imports: [NavbarMentorComponent, CommonModule, FormRDVComponent],
  templateUrl: './liste-rdv.component.html',
  styleUrl: './liste-rdv.component.css'
})
export class ListeRDVMentorComponent implements OnInit{

  rendezVous: any[] = [];
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

}
