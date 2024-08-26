import { Component, Input, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-demande',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './detail-demande.component.html',
  styleUrl: './detail-demande.component.css',
})
export class DetailDemandeComponent implements OnInit {

  @Input() requestId!: number;
  requestDetails: any;

  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    if (this.requestId) {
      this.getRequestDetails(this.requestId);
    }
  }

  // Méthode pour récupérer les détails d'une demande spécifique
  getRequestDetails(id: number): void {
    this.mentorService.getMentorshipRequestById(id).subscribe({
      next: (response) => {
        this.requestDetails = response.data; // Assurez-vous que la réponse contient les détails de la demande
        console.log(this.requestDetails);

      },
      error: (err) => {
        console.error('Erreur lors de la récupération des détails de la demande:', err);
      }
    });
  }

  handleMentorshipRequest(action: string) {
    const status = action === 'accept' ? 'Acceptée' : 'Refusée';

    this.mentorService.updateMentorshipRequest(this.requestId, { statut: status })
      .subscribe({
        next: (response) => {
          console.log('Demande mise à jour:', response);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la demande:', error);
        }
      });
  }

}
