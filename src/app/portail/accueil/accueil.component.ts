import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
