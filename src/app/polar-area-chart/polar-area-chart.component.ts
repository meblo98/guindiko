import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BaseChartDirective } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { DataService } from '../services/dataservice.service';

@Component({
  selector: 'app-polar-area-chart',
  standalone: true,
  imports: [BaseChartDirective, CanvasJSAngularChartsModule],
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Statistique des rendez-vous"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Rendez-vous passé" },
		  { y: 28.2, name: "Rendez-vous total" },
		  { y: 14.4, name: "Demandes" },
		  { y: 43.3, name: "Menté" }
		]
	  }]
	}
}
