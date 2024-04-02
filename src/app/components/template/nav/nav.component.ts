import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  esconderSidenav() {
    this.sidenav.close();
  }
  abrirSidenav() {
    this.sidenav.open();
  }

  ngOnInit(): void {}
}
