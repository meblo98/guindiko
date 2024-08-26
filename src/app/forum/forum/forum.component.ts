import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importer RouterModule
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { ForumService } from '../../services/forum.service'; // Chemin correct vers le service

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // Ajouter CommonModule et RouterModule ici
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
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
