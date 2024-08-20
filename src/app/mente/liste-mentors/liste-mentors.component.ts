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
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('User Info:', user);
  
    if (user && user.id) {
      this.authService.getMenteInfo(user.id).subscribe(
        (mentee) => {
          console.log('Mentee Info:', mentee);
  
          if (mentee && mentee.id) {
            this.mentorService.requestMentorship(mentorId, mentee.id).subscribe({
              next: (response) => {
                console.log('Demande de mentorat envoyée avec succès:', response);
              },
              error: (error) => {
                console.error('Erreur lors de la demande de mentorat:', error);
              }
            });
          } else {
            console.error('Mentee non trouvé ou ID manquant');
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des informations du mentee:', error);
        }
      );
    } else {
      console.error('Utilisateur non trouvé ou ID manquant');
    }
  }
  
  

}
