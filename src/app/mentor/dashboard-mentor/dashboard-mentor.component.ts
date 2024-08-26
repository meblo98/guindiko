import { Component } from '@angular/core';
import { NavbarMentorComponent } from "../navbar-mentor/navbar-mentor.component";
import Chart from 'chart.js/auto';
import { ChartComponent } from '../../chart/chart.component';
import { PolarAreaChartComponent } from "../../polar-area-chart/polar-area-chart.component";

@Component({
  selector: 'app-dashboard-mentor',
  standalone: true,
  imports: [NavbarMentorComponent, ChartComponent, PolarAreaChartComponent],
  templateUrl: './dashboard-mentor.component.html',
  styleUrl: './dashboard-mentor.component.css'
})
export class DashboardMentorComponent {




}
