import { AlertsService } from './alerts.service';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Veiculos } from './../Interfaces/veiculos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudRepositoryService } from './crud-repository.service';
import { Basic } from '../Interfaces/Basic';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService extends CrudRepositoryService<Veiculos> {
  constructor(
    protected override http: HttpClient,
    public alerts: AlertsService
  ) {
    super(http, 'veiculos');
  }

  public createVeiculos(item: Veiculos): Observable<Veiculos> {
    return this.create(item);
  }
  public getAllVeiculos(): Observable<Veiculos[]> {
    return this.getAll();
  }
  // public deleteVeiculos(item: Veiculos): Observable<Veiculos> {
  //   return this.delete(item).subscribe(
  //     () => {
  //       this.alerts.showMessage('Veículo Removido com Sucesso', 'success');
  //     },
  //     (error) => {
  //       this.alerts.showMessage(
  //         'Erro ao remover veículo: ' + error.message,
  //         'error',
  //         5
  //       );
  //     }
  //   );
  // }
  // public updateVeiculos(item: Veiculos): Observable<Veiculos> {
  //   return this.update(item, this.id).pipe();
  // }
  // public getByIdVeiculos(item: Veiculos): Observable<Veiculos> {
  //   return this.create(item);
  // }
}
