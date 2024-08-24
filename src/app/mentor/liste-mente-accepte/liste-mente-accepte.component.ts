import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { NavbarMentorComponent } from '../navbar-mentor/navbar-mentor.component';

@Component({
  selector: 'app-liste-mente-accepte',
  standalone: true,
  imports: [CommonModule, NavbarMentorComponent],
  templateUrl: './liste-mente-accepte.component.html',
  styleUrl: './liste-mente-accepte.component.css'
})
export class ListeMenteAccepteComponent implements OnInit {


  demandesAcceptees: any[] = [];

  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    // Récupération des demandes de mentorat acceptées
    this.mentorService.getAcceptedRequestsForMentor().subscribe({
      next: (response) => {
        this.demandesAcceptees = response;
        console.log('Demandes acceptées:', this.demandesAcceptees);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des demandes acceptées:', error);
      }
    });
  }


}
