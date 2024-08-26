import { Component } from '@angular/core';
import { ForumService } from '../../services/forum.service'; // Chemin correct vers le service
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-forum-mentee',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forum-mentee.component.html',
  styleUrl: './forum-mentee.component.css'
})
export class ForumMenteeComponent {
  forums: any[] = []; // Tableau pour stocker les forums

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.getForums(); // Récupère les forums au démarrage du composant
  }

  // Méthode pour récupérer les forums
  getForums(): void {
    this.forumService.getForums().subscribe((data: any[]) => {
      this.forums = data;
    });
  }

}
