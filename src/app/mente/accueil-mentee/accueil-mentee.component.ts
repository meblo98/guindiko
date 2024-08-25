import { Component } from '@angular/core';
import { NavbarMenteeComponent } from "../navbar-mentee/navbar-mentee.component";

@Component({
  selector: 'app-accueil-mentee',
  standalone: true,
  imports: [NavbarMenteeComponent],
  templateUrl: './accueil-mentee.component.html',
  styleUrl: './accueil-mentee.component.css'
})
export class AccueilMenteeComponent {

}
