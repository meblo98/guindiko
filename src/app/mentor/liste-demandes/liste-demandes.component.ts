import { Component } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";
import { DetailDemandeComponent } from '../detail-demande/detail-demande.component';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-demandes',
  standalone: true,
  imports: [NavbarMentorComponent, DetailDemandeComponent, CommonModule],
  templateUrl: './liste-demandes.component.html',
  styleUrl: './liste-demandes.component.css'
})
export class ListeDemandesComponent {

  mentorshipRequests: any[] = [];
  selectedRequestId: number | null = null;

  constructor(private mentorService: MentorService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getMentorshipRequests();
  }


  getMentorshipRequests(): void {
    this.mentorService.getMentorshipRequests().subscribe({
      next: (response) => {
        this.mentorshipRequests = response.data; // Assurez-vous que la réponse contient les données
        console.log('Liste des demandes de mentorat:', this.mentorshipRequests);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des demandes de mentorat:', err);
      }
    });
  }

    // Méthode pour ouvrir le modal et afficher les détails d'une demande spécifique
    openDetailsModal(requestId: number): void {
      this.selectedRequestId = requestId;
      const modalRef = this.modalService.open(DetailDemandeComponent, { size: 'lg' });
      modalRef.componentInstance.requestId = this.selectedRequestId;
    }

}
