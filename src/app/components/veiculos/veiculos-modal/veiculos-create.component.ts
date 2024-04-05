import { VeiculosService } from '../../../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Veiculos } from 'src/app/Interfaces/veiculos';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-veiculos-create',
  templateUrl: './veiculos-create.component.html',
  styleUrls: ['./veiculos-create.component.scss'],
})
export class VeiculosCreateComponent implements OnInit {
  // liveForm!: FormGroup;
  veiculos: Veiculos[] = [];
  veiculo: Veiculos = {
    id: 0,
    id_marca: 21,
    placa: '',
    cor: '',
    preco: null,
    anoFabricacao: '',
    km: null,
  };

  constructor(
    // private fb: FormBuilder,
    private VeiculosService: VeiculosService,
    public alerts: AlertsService,
    public dialogRef: MatDialogRef<VeiculosCreateComponent>
  ) {}

  ngOnInit(): void {
    // this.liveForm = this.fb.group({
    //   id_marca: ['', [Validators.required]],
    //   placa: ['', [Validators.required]],
    //   cor: ['', [Validators.required]],
    // });
  }
  createVeiculo(): void {
    this.VeiculosService.create(this.veiculo).subscribe(
      () => {
        this.alerts.showMessage('Veículo criado com Sucesso', 'success');
        this.get();
        this.close();
      },
      (error) => {
        this.alerts.showMessage(
          'Erro ao criar veículo: ' + error.message,
          'error',
          5
        );
      }
    );
  }
  get(): void {
    this.VeiculosService.getAllVeiculos().subscribe((veiculos) => {
      this.veiculos = veiculos;
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
