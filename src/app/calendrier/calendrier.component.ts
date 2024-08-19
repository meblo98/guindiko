import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [],
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      // $('#calendar').fullCalendar({
      //   language: 'fr',
      //   todayHighlight: true,
      //   events: [
      //     {
      //       title: 'Événement 1',
      //       start: '2024-11-05',
      //       end: '2024-11-07'
      //     },
      //     {
      //       title: 'Événement 2',
      //       start: '2024-11-10',
      //       end: '2024-11-12'
      //     }
      //   ]
      // });
    }, 0);
  }
}
