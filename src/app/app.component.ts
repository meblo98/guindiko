import { AccueilMenteeComponent } from './mente/accueil-mentee/accueil-mentee.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortailComponent } from "./mente/accueil/accueil.component";
import { ListeMentorsComponent } from "./mente/liste-mentors/liste-mentors.component";
import { ListeRDVComponent } from "./mente/liste-rdv/liste-rdv.component";
import { ForumComponent } from "./admin/forum/forum.component";
import { PostforumComponent } from "./mente/postforum/postforum.component";
import { ForumMenteeComponent } from "./mente/forum-mentee/forum-mentee.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeMentorsComponent, ListeRDVComponent, ForumComponent, PostforumComponent, AccueilMenteeComponent, ForumMenteeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guindiko';
}
