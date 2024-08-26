import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForumMenteeService } from './../../services/forum-mentee.service';
import { PostForumService } from './../../services/postforum.service';

@Component({
  selector: 'app-forum-mentee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './forum-mentee.component.html',
  styleUrls: ['./forum-mentee.component.css']
})
export class ForumMenteeComponent implements OnInit {
  forums: any[] = [];
  selectedForumPosts: any[] = [];
  selectedForumId: number | null = null;

  constructor(
    private forumMenteeService: ForumMenteeService,
    private postForumService: PostForumService
  ) {}

  ngOnInit(): void {
    this.loadForums();
  }

  loadForums(): void {
    this.forumMenteeService.getForums().subscribe((data: any[]) => {
      this.forums = data;
      console.log('Forums received:', this.forums);
    });
  }

  onSelectForum(forumId: number): void {
    this.selectedForumId = forumId;
    this.postForumService.getPostsByForumId(forumId).subscribe(
      (posts) => {
        this.selectedForumPosts = posts;
      },
      (error) => {
        console.error('Error loading posts:', error);
      }
    );
  }

  loadCommentsForPost(post: any): void {
    this.postForumService.getCommentsByPostId(post.id).subscribe((comments) => {
      post.comments = comments;
    });
  }

  
}
