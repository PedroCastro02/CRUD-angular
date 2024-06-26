import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Basic } from '../Interfaces/Basic';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudRepositoryService<T extends Basic> {
  constructor(
    protected http: HttpClient,
    @Inject('endPoint') protected endPoint: string
  ) {}

  create(item: T): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${this.endPoint}`, item);
  }
  getAll(): Observable<T[]> {
    console.log('entrou no getall do crud');
    return this.http.get<T[]>(`${environment.apiUrl}${this.endPoint}`);
  }
  remove(id: string): any {
    console.log(`${environment.apiUrl}${this.endPoint}/${id}`);
    return this.http.delete<void>(
      `${environment.apiUrl}${this.endPoint}/${id}`
    );
  }
  // update(item: T, id: number): Observable<T> {
  //   return this.http.put<T>(`${environment.apiUrl}${this.endPoint}`, item);
  // }
  // getById(item: T, id: number): Observable<T> {
  //   return this.http.post<T>(`${environment.apiUrl}${this.endPoint}`, item);
  // }
}
