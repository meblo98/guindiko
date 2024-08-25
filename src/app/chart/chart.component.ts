import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { CanvasJS, CanvasJSAngularChartsModule, CanvasJSChart } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective, CanvasJSAngularChartsModule, CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chartOptions = {
    title: {
      text: 'Les demandes mensuelles',
    },
    theme: 'light2',
    animationEnabled: true,
    exportEnabled: true,
    axisY: {
      includeZero: true,
      valueFormatString: '#,##0k',
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        yValueFormatString: '#,##0k',
        color: '#01b8aa',
        dataPoints: [
          { label: 'Jan', y: 172 },
          { label: 'Fev', y: 189 },
          { label: 'Mar', y: 201 },
          { label: 'Avr', y: 240 },
          { label: 'Mai', y: 166 },
          { label: 'Jui', y: 196 },
          { label: 'Jul', y: 218 },
          { label: 'Aut', y: 167 },
          { label: 'Sep', y: 175 },
          { label: 'Oct', y: 152 },
          { label: 'Nov', y: 156 },
          { label: 'Dec', y: 164 },
        ],
      },
    ],
  };


}
