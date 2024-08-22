import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-commentaire',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './post-commentaire.component.html',
  styleUrls: ['./post-commentaire.component.css']
})
export class PostCommentaireComponent {
  commentaires = []; // Remplacez par votre source de données réelle

  createCommentaire() {
    // Implémentez la logique pour ajouter un commentaire
    console.log("Ajout d'un commentaire");
  }

  editCommentaire(id: number) {
    // Implémentez la logique pour éditer un commentaire
    console.log("Édition du commentaire avec ID:", id);
  }

  deleteCommentaire(id: number) {
    // Implémentez la logique pour supprimer un commentaire
    console.log("Suppression du commentaire avec ID:", id);
  }
}
