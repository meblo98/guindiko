import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from '../services/dataservice.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // Use ChartData type to encapsulate labels and datasets
  public barChartData: ChartData<'bar'> = {
    labels: [], // Initialize with an empty array
    datasets: [
      { data: [], label: 'Statistiques' } // Initialize dataset
    ]
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.dataService.getData().subscribe((data: any) => {
    //   // Fill the labels and datasets correctly
    //   this.barChartData.labels = data.labels;
    //   this.barChartData.datasets[0].data = data.values;
    // });
  }
}
