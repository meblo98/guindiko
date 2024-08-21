import { Component } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";
import { DetailDemandeComponent } from '../detail-demande/detail-demande.component';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-demandes',
  standalone: true,
  imports: [NavbarMentorComponent, DetailDemandeComponent, CommonModule],
  templateUrl: './liste-demandes.component.html',
  styleUrl: './liste-demandes.component.css'
})
export class ListeDemandesComponent {

  mentorshipRequests: any[] = [];

  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    const mentorId = Number(localStorage.getItem('mentor')); // Récupérer l'ID du mentor connecté

    this.mentorService.getMentorshipRequests(mentorId).subscribe({
      next: (requests) => {
        this.mentorshipRequests = requests;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des demandes de mentorat :', error);
      }
    });
  }
}
