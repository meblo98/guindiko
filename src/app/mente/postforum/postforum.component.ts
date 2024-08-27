import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostForumService } from '../../services/postforum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireForumService } from '../../services/commentaire-forum.service';

@Component({
  selector: 'app-postforum',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './postforum.component.html',
  styleUrls: ['./postforum.component.css']
})
export class PostforumComponent implements OnInit {

  posts: any[] = [];
  selectedForumId: number | null = null;
  commentsVisible: { [key: number]: boolean } = {};
  forumId: number | null = null;
  comments: { [key: number]: any[] } = {}; // Stocker les commentaires pour chaque post

  constructor(private postforumService: PostForumService,
    private route: ActivatedRoute,
    private userService: UserService, // Inject the UserService
    private commentaireForumService: CommentaireForumService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.forumId = +params.get('id')!;
      if (this.forumId) {
        this.loadPosts(this.forumId);
      }
    });

  }

  loadPosts(forumId: number): void {
    this.postforumService.getPostsByForumId(forumId).subscribe(
      (response: any) => {
        this.posts = response;
        console.log(this.posts);

      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }

  toggleComments(postId: number): void {
    if (!this.comments[postId]) {
      this.loadComments(postId);  // Chargez les commentaires si ce n'est pas encore fait
    }
    this.commentsVisible[postId] = !this.commentsVisible[postId];
  }


  loadComments(postForumId: number): void {
    this.commentaireForumService.getCommentairesByPostId(postForumId).subscribe(
      (response: any[]) => {
        console.log('Commentaires récupérés :', response);  // Ajoutez ceci
        this.comments[postForumId] = response;
      },
      (error) => {
        console.error('Error loading comments:', error);
      }
    );
  }
}
