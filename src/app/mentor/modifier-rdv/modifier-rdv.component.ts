import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RdvService } from '../../services/rdv.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-rdv',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modifier-rdv.component.html',
  styleUrls: ['./modifier-rdv.component.css']
})
export class ModifierRDVComponent implements OnInit {

  @Input() rdv: any;
  editRDVForm!: FormGroup; // Use definite assignment assertion

  constructor(
    private fb: FormBuilder,
    private rdvService: RdvService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.editRDVForm = this.fb.group({
      date_rendezVous: [this.rdv?.date_rendezVous, Validators.required],
      type: [this.rdv?.type, Validators.required],
      sujet: [this.rdv?.sujet, Validators.required],
      statut: [this.rdv?.statut, Validators.required],
      lieu: [this.rdv?.lieu],
      lien: [this.rdv?.lien],
      duree: [this.rdv?.duree, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.editRDVForm.valid) {
      const updatedRDV = this.editRDVForm.value;
      this.rdvService.updateRendezVous(this.rdv.id, updatedRDV).subscribe({
        next: (response) => {
          console.log('Rendez-vous mis à jour:', response);
          this.activeModal.close('Rendez-vous mis à jour avec succès');
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du rendez-vous:', err);
        }
      });
    }
  }

  closeModal(): void {
    this.activeModal.dismiss('Modal fermé');
  }
}
