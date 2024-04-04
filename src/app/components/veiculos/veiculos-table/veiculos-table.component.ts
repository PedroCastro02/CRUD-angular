import { VeiculosService } from './../../../services/veiculos.service';
import { Veiculos } from './../../../Interfaces/veiculos';
import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-veiculos-table',
  templateUrl: './veiculos-table.component.html',
  styleUrls: ['./veiculos-table.component.scss'],
})
export class VeiculosTableComponent implements OnInit {
  veiculos!: Veiculos[];
  displayedColumns = [
    'id',
    'placa',
    'cor',
    'preco',
    'id_marca',
    'anoFabricacao',
    'km',
    'Acoes',
  ];

  constructor(
    private VeiculosService: VeiculosService,
    public alerts: AlertsService
  ) {}

  ngOnInit(): void {
    this.VeiculosService.getAllVeiculos().subscribe((veiculos) => {
      this.veiculos = veiculos;
    });
  }
}
