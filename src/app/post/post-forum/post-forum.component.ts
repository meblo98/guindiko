import { Component, OnInit } from '@angular/core';
import { PostForumService } from '../../services/post-forum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { FormsModule } from '@angular/forms'; // Importer FormsModule

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajouter FormsModule ici
  selector: 'app-post-forum',
  templateUrl: './post-forum.component.html',
  styleUrls: ['./post-forum.component.css']
})
export class PostForumComponent implements OnInit {
  posts: any[] = [];
  post: any = {};
  isEditing: boolean = false;

  constructor(
    private postForumService: PostForumService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPosts();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPost(Number(id));
    }
  }

  loadPosts(): void {
    this.postForumService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  loadPost(id: number): void {
    this.postForumService.getPost(id).subscribe(data => {
      this.post = data;
      this.isEditing = true;
    });
  }

  savePost(): void {
    if (this.isEditing) {
      this.postForumService.updatePost(this.post).subscribe(() => {
        this.loadPosts();
        this.isEditing = false;
        this.post = {};
      });
    } else {
      this.postForumService.createPost(this.post).subscribe(() => {
        this.loadPosts();
        this.post = {};
      });
    }
  }

  deletePost(id: number): void {
    this.postForumService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }

  editPost(post: any): void {
    this.post = { ...post };
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.post = {};
  }
}
