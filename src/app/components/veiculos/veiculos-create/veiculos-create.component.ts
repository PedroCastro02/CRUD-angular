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
  veiculo: Veiculos = {
    id_marca: 21,
    placa: '3gf5jw',
    cor: 'vermelho',
    preco: 245,
    anoFabricacao: '2002/10/21',
    km: 213124,
  };

  constructor(
    private fb: FormBuilder,
    private veiculosService: VeiculosService,
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
    this.veiculosService.create(this.veiculo).subscribe(
      () => {
        this.alerts.showMessage('Veículo criado com Sucesso', 'success');
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

  close(): void {
    this.dialogRef.close();
  }
}
