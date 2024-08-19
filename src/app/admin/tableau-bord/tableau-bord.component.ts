import { Component } from '@angular/core';
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { SidebarNavigateComponent } from "../layouts/sidebar-navigate/sidebar-navigate.component";
import { CalendrierComponent } from "../../calendrier/calendrier.component";

@Component({
  selector: 'app-tableau-bord',
  standalone: true,
  imports: [SidebarComponent, SidebarNavigateComponent, CalendrierComponent],
  templateUrl: './tableau-bord.component.html',
  styleUrl: './tableau-bord.component.css'
})
export class TableauBordComponent {

}
