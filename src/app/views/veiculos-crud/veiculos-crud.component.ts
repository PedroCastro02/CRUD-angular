import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VeiculosCreateComponent } from 'src/app/components/veiculos/veiculos-create/veiculos-create.component';

@Component({
  selector: 'app-veiculos-crud',
  templateUrl: './veiculos-crud.component.html',
  styleUrls: ['./veiculos-crud.component.scss'],
})
export class VeiculosCrudComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(VeiculosCreateComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {}
}
