import { Component, Input, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-demande',
  standalone: true,
  imports: [CommonModule],
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
}
