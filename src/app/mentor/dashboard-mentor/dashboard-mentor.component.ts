import { Component } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";

@Component({
  selector: 'app-dashboard-mentor',
  standalone: true,
  imports: [NavbarMentorComponent],
  templateUrl: './dashboard-mentor.component.html',
  styleUrl: './dashboard-mentor.component.css'
})
export class DashboardMentorComponent {

}
