import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostForumService } from '../../services/postforum.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private postforumService: PostForumService,
    private route: ActivatedRoute,
    private userService: UserService, // Inject the UserService
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
      (data: any) => {
        this.posts = data;
        console.log(this.posts);

      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }

  toggleComments(postId: number): void {
    this.commentsVisible[postId] = !this.commentsVisible[postId];
  }
}
