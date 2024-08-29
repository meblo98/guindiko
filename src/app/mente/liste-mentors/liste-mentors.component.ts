import { Component, NgModule, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NavbarMenteeComponent } from "../navbar-mentee/navbar-mentee.component";
import { NavbarMentorComponent } from "../../mentor/navbar-mentor/navbar-mentor.component";
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-mentors',
  standalone: true,
  imports: [CommonModule, NavbarMenteeComponent, NavbarMentorComponent, RouterLink],
  templateUrl: './liste-mentors.component.html',
  styleUrl: './liste-mentors.component.css'
})
export class ListeMentorsComponent implements OnInit{

  mentors: any[] = [];
  menteeId: number | null = null;

  constructor(private mentorService: MentorService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadMentors();
  }

  loadMentors(): void {
    // Method to load mentors (already implemented in your component)
    this.mentorService.getMentors().subscribe((data) => {
      this.mentors = data;
    });
  }

  requestMentorship(mentorId: number): void {
    const storedMentee = localStorage.getItem('mentee');

    // Vérifiez si l'objet 'mentee' existe dans le localStorage et n'est pas null
    if (storedMentee) {
      const mentee = JSON.parse(storedMentee);

      // Vérifiez si mentee a une propriété 'id' définie
      if (mentee && mentee.id) {
        this.mentorService.requestMentorship(mentorId, mentee.id).subscribe({
          next: (response) => {
            Swal.fire({
              title: 'Demande de mentorat envoyée !',
              text: 'Votre demande de mentorat a été envoyée avec succès.',
              icon: 'success',
              timer: 1500
            });
                    },
          error: (err) => {
            Swal.fire({
              title: 'Erreur lors de l\'envoi de la demande de mentorat',
              text: 'Une erreur est survenue lors de l\'envoi de votre demande de mentorat. Veuillez réessayer.',
              icon: 'error',
              timer: 1500
            });
          }
        });
      } else {
        Swal.fire({
          title: 'ID du mentee non trouvé',
          text: 'Impossible de trouver l\'ID du mentee pour envoyer la demande de mentorat.',
          icon: 'error',
          timer: 1500
        });
      }
    } else {
      Swal.fire({
        title: 'Aucun mentee trouvé',
        text: 'Aucun mentee trouvé dans le localStorage pour envoyer la demande de mentorat.',
        icon: 'error',
        timer: 1500
      });
    }
  }
}



