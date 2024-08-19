import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { SidebarNavigateComponent } from "../layouts/sidebar-navigate/sidebar-navigate.component";
import { ActivatedRoute } from '@angular/router'; // Pour obtenir les paramètres de l'URL
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [SidebarComponent, SidebarNavigateComponent],
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'] // Correction du nom de la propriété
})
export class DetailUserComponent implements OnInit {
  user: any; // Déclaration d'une propriété pour stocker les informations de l'utilisateur
  experience: string = ''; // Exemple de propriété pour les expériences, ajuste selon les besoins

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupère l'ID de l'utilisateur depuis les paramètres de l'URL
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.loadUser(userId);
  }

  // Méthode pour charger les informations de l'utilisateur
  loadUser(id: number): void {
    this.userService.getUserById(id).subscribe(
      data => {
        this.user = data;
        // Assigne d'autres informations si nécessaire, par exemple l'expérience
        this.experience = data.experience || ''; // Assure-toi que la propriété est correcte
      },
      error => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur', error);
      }
    );
  }
}
