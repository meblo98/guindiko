import { Component, Input, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

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
  private modalRef?: NgbModalRef;

  constructor(private mentorService: MentorService, private modalService: NgbModal) {}

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
          this.showSweetAlert(action);
          this.closeModal();
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la demande:', error);
        }
      });
  }

  showSweetAlert(action: string) {
    Swal.fire({
      title: action === 'accept' ? 'Demande acceptée' : 'Demande refusée',
      text: `La demande a été ${action === 'accept' ? 'acceptée' : 'refusée'} avec succès.`,
      icon: 'success',
      confirmButtonText: 'Fermer',
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  }

  closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

}
