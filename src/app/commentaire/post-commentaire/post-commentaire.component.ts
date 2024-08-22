import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-commentaire',
  standalone: true,
  imports: [CommonModule],  // Ajoutez CommonModule ici
  templateUrl: './post-commentaire.component.html',
  styleUrl: './post-commentaire.component.css'
  
})
export class PostCommentaireComponent {

  commentaires: any[] = [];

  createCommentaire(comment: string) {
  }

  editCommentaire(id: number) {
  }

  deleteCommentaire(id: number) {
  }
}



