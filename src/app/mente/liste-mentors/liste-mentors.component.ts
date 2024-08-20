import { Component, NgModule, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-liste-mentors',
  standalone: true,
  imports: [CommonModule],
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
            console.log('Demande de mentorat envoyée avec succès:', response);
          },
          error: (err) => {
            console.error('Erreur lors de l\'envoi de la demande de mentorat:', err);
          }
        });
      } else {
        console.error('ID du mentee non trouvé');
      }
    } else {
      console.error('Aucun mentee trouvé dans le localStorage');
    }
  }
}



