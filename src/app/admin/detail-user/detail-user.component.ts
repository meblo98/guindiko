import { Component } from '@angular/core';
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";
import { SidebarNavigateComponent } from "../layouts/sidebar-navigate/sidebar-navigate.component";

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [SidebarComponent, SidebarNavigateComponent],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css'
})
export class DetailUserComponent {

}
