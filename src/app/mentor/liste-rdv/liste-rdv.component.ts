import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifierRDVComponent } from '../modifier-rdv/modifier-rdv.component';
import { NavbarMentorComponent } from '../navbar-mentor/navbar-mentor.component';
import { FormRDVComponent } from '../form-rdv/form-rdv.component';

@Component({
  selector: 'app-liste-rdv',
  standalone: true,
  imports: [NavbarMentorComponent, FormRDVComponent, ModifierRDVComponent, CommonModule],
  templateUrl: './liste-rdv.component.html',
  styleUrls: ['./liste-rdv.component.css']
})
export class ListeRDVMentorComponent implements OnInit {

  rendezVous: any[] = [];
  selectedRendezVous: any = null;
  constructor(private rdvService: RdvService, private modalService: NgbModal) { }

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

  openEditModal(rdv: any): void {
    const modalRef = this.modalService.open(ModifierRDVComponent);
    modalRef.componentInstance.rdv = rdv;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('Dismissed:', reason);
    });
  }

  updateRendezVous(updatedRdv: any): void {
    if (this.selectedRendezVous && this.selectedRendezVous.id) {
      this.rdvService.updateRendezVous(this.selectedRendezVous.id, updatedRdv).subscribe({
        next: (response) => {
          const index = this.rendezVous.findIndex(rdv => rdv.id === this.selectedRendezVous.id);
          if (index !== -1) {
            this.rendezVous[index] = response;
          }
          this.selectedRendezVous = null;
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du rendez-vous:', err);
        }
      });
    } else {
      console.error('Aucun rendez-vous sélectionné ou l\'ID est manquant.');
    }
  }

}
