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

  esconderSidenav(): void {
    this.sidenav.close();
  }
  abrirSidenav(): void {
    this.sidenav.open();
  }

  ngOnInit(): void {}
}
