import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from '../services/dataservice.service';

@Component({
  selector: 'app-polar-area-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent implements OnInit {
  public polarAreaChartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
  };

  public polarAreaChartType: 'polarArea' = 'polarArea';

  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: [], // Initialize with empty array
    datasets: [
      {
        data: [], // Initialize with empty array
        label: 'Statistiques',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      }
    ]
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch all data
    this.dataService.getMentes().subscribe((mentes: any) => {
      this.dataService.getRendezvous().subscribe((rendezvous: any) => {
        this.dataService.getDemands().subscribe((demands: any) => {
          // Process data to populate the chart
          const labels = ['Mentes', 'Rendez-vous', 'Demands'];
          const values = [
            mentes.length,          // Assuming mentees is an array
            rendezvous.length,       // Assuming rendezvous is an array
            demands.length           // Assuming demands is an array
          ];

          // Update chart data
          this.polarAreaChartData.labels = labels;
          this.polarAreaChartData.datasets[0].data = values;
        });
      });
    });
  }
}
