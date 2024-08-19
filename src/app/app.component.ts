import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./mente/accueil/accueil.component";
import { ListeMentorsComponent } from "./mente/liste-mentors/liste-mentors.component";
import { ListeRDVComponent } from "./mente/liste-rdv/liste-rdv.component";
import { ForumComponent } from "./admin/forum/forum.component";
import { PostforumComponent } from "./mente/postforum/postforum.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent, ListeMentorsComponent, ListeRDVComponent, ForumComponent, PostforumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guindiko';
}
