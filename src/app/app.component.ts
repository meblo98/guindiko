import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilComponent } from "./mente/accueil/accueil.component";
import { ListeMentorsComponent } from "./mente/liste-mentors/liste-mentors.component";
import { ListeRDVComponent } from "./mente/liste-rdv/liste-rdv.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilComponent, ListeMentorsComponent, ListeRDVComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guindiko';
}
