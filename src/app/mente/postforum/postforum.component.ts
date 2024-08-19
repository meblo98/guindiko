import { PostForumService } from './../../services/post-forum.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-postforum',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule,ReactiveFormsModule],
  templateUrl: './postforum.component.html',
  styleUrl: './postforum.component.css'
})
export class PostforumComponent  {

  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postForumService: PostForumService) {
    this.postForm = this.fb.group({
      image: [null, Validators.required],
      contenu: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.postForm.valid) {
      const formData = new FormData();
      formData.append('image', this.postForm.get('image')?.value);
      formData.append('contenu', this.postForm.get('contenu')?.value);

      this.postForumService.createPostForum(formData).subscribe(
        (response) => {
          console.log('Post créé avec succès', response);
          // Réinitialiser le formulaire après la soumission
          this.postForm.reset();
        },
        (error) => {
          console.error('Erreur lors de la création du post', error);
        }
      );
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.postForm.patchValue({
        image: file
      });
    }
  }

}
