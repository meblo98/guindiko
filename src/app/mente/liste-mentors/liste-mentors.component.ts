import { Component } from '@angular/core';
import { MentorService } from '../../services/mentor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-mentors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-mentors.component.html',
  styleUrl: './liste-mentors.component.css'
})
export class ListeMentorsComponent {
  mentors: any[] = [];

  constructor(private mentorService: MentorService) {}

  ngOnInit(): void {
    this.mentorService.getMentors().subscribe(
      (data) => {
        this.mentors = data;
      },
      (error) => {
        console.error('Error fetching mentors', error);
      }
    );
  }


  requestMentorship(mentorId: number): void {
    const menteId = 2;

    if (menteId !== null) {
      this.mentorService.requestMentorship(mentorId, menteId).subscribe(
        (response) => {
          alert('Demande de mentorat créée avec succès');
        },
        (error) => {
          console.error('Erreur lors de la demande de mentorat', error);
          alert('Échec de la création de la demande de mentorat');
        }
      );
    } else {
      alert('Vous devez être connecté pour demander un mentorat');
    }
  }

}
