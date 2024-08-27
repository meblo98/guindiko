import { UserService } from './../../services/user.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostForumService } from '../../services/postforum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireForumService } from '../../services/commentaire-forum.service';
import { NavbarMenteeComponent } from "../navbar-mentee/navbar-mentee.component";

@Component({
  selector: 'app-postforum',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarMenteeComponent],
  templateUrl: './postforum.component.html',
  styleUrls: ['./postforum.component.css']
})
export class PostforumComponent implements OnInit {

    posts: any[] = [];
    comments: { [key: number]: any[] } = {}; // Stocker les commentaires pour chaque post
    newComment: { [key: number]: string } = {}; // Pour stocker le nouveau commentaire par post
    commentsVisible: { [key: number]: boolean } = {};
    newPost = {
      contenu: '',
      image: ''
    };

    constructor(
      private postforumService: PostForumService,
      private route: ActivatedRoute,
      private commentaireForumService: CommentaireForumService,
      private cdr: ChangeDetectorRef // Injectez ChangeDetectorRef
    ) {}

    isFormVisible = false; // Control form visibility

    toggleFormVisibility() {
      this.isFormVisible = !this.isFormVisible;
    }
    submitPost() {
      // Add the new post to the list
      this.posts.push({
        ...this.newPost,
        user_id: 'Current User', // Replace this with actual user ID
        createdAt: new Date()
      });

      // Clear the form and hide it
      this.newPost = {contenu: '', image: '' };
      this.isFormVisible = false;
    }
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const forumId = +params.get('id')!;
        if (forumId) {
          this.loadPosts(forumId);
        }
      });
    }

    loadPosts(forumId: number): void {
      this.postforumService.getPostsByForumId(forumId).subscribe(
        (response: any) => {
          this.posts = response;
          this.posts.forEach(post => {
            this.loadComments(post.id); // Chargez les commentaires pour chaque post
          });
        },
        (error) => {
          console.error('Error loading posts:', error);
        }
      );
    }

    loadComments(postId: number): void {
      this.commentaireForumService.getCommentairesByPostId(postId).subscribe(
        (response: any[]) => {
          this.comments[postId] = response;
          this.cdr.detectChanges(); // Forcer la détection des changements
        },
        (error) => {
          console.error('Error loading comments:', error);
        }
      );
    }

    toggleComments(postId: number): void {
      if (!this.comments[postId]) {
        this.loadComments(postId);
      }
      this.commentsVisible[postId] = !this.commentsVisible[postId];
    }

    addComment(postId: number): void {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      console.log('Parsed currentUser:', currentUser);

      const userId = localStorage.getItem('userId');  // Or currentUser.id depending on how it's stored
      const contenu = this.newComment[postId];

      console.log('Adding comment:', { contenu, post_forum_id: postId, user_id: userId });

      if (userId && contenu) {
        this.commentaireForumService.addCommentaire({
          contenu,
          post_forum_id: postId,
          user_id: +userId // Ensure this is a number
        }).subscribe(
          (response: any) => {
            console.log('Comment added successfully:', response);
            this.comments[postId].push(response);
            this.newComment[postId] = '';
            this.cdr.detectChanges();
          },
          (error) => {
            console.error('Error adding comment:', error);
          }
        );
      } else {
        console.error('User ID or content is missing');
      }
    }

}
