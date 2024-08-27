import { CommonModule } from '@angular/common';
import { Rdv, RdvService } from './../../services/rdv.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarMenteeComponent } from "../navbar-mentee/navbar-mentee.component";

@Component({
  selector: 'app-liste-rdv',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavbarMenteeComponent],
  templateUrl: './liste-rdv.component.html',
  styleUrl: './liste-rdv.component.css'
})
export class ListeRDVComponent implements OnInit {
  rdv: Rdv [] = [];

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {
    this.rdvService.getRdv().subscribe((rdv) => {
      this.rdv = rdv;
    });
  }

}
