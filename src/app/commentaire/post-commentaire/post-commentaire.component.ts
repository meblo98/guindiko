import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-commentaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-commentaire.component.html',
  styleUrls: ['./post-commentaire.component.css']
})
export class PostCommentaireComponent {

  // Tableau pour stocker les commentaires
  commentaires: any[] = [];

  // Méthode pour créer un nouveau commentaire
  createCommentaire(comment: string): void {
    // Générer un ID unique pour le nouveau commentaire
    const newId = this.commentaires.length > 0 ? this.commentaires[this.commentaires.length - 1].id + 1 : 1;

    // Créer un nouvel objet commentaire
    const newCommentaire = {
      id: newId,
      contenu: comment,
      user_id: 1, // Remplacez par l'ID de l'utilisateur actuel
      post_forum_id: 1 // Remplacez par l'ID du post forum actuel
    };

    // Ajouter le nouveau commentaire au tableau
    this.commentaires.push(newCommentaire);

    // (Optionnel) Logique supplémentaire comme l'envoi du commentaire au serveur via un service
    console.log('Commentaire créé:', newCommentaire);
  }

  // Méthode pour éditer un commentaire existant
  editCommentaire(id: number): void {
    // Trouver le commentaire par son ID
    const commentaireToEdit = this.commentaires.find(comment => comment.id === id);

    if (commentaireToEdit) {
      // Logique d'édition - Pour cet exemple, on change le contenu du commentaire
      commentaireToEdit.contenu = prompt('Modifier le commentaire:', commentaireToEdit.contenu) || commentaireToEdit.contenu;

      // (Optionnel) Logique supplémentaire comme la mise à jour du commentaire sur le serveur
      console.log('Commentaire modifié:', commentaireToEdit);
    } else {
      console.error('Commentaire non trouvé!');
    }
  }

  // Méthode pour supprimer un commentaire existant
  deleteCommentaire(id: number): void {
    // Filtrer le tableau pour supprimer le commentaire avec l'ID donné
    this.commentaires = this.commentaires.filter(comment => comment.id !== id);

    // (Optionnel) Logique supplémentaire comme la suppression du commentaire sur le serveur
    console.log('Commentaire supprimé, ID:', id);
  }
}
