import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudRepositoryService<T> {
  constructor(
    protected http: HttpClient,
    @Inject('endPoint') protected endPoint: string // public id: number
  ) {}

  create(item: T): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${this.endPoint}`, item);
  }
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.apiUrl}${this.endPoint}`);
  }
  // update(item: T, id: number): Observable<T> {
  //   return this.http.put<T>(`${environment.apiUrl}${this.endPoint}`, item);
  // }
  // getById(item: T, id: number): Observable<T> {
  //   return this.http.post<T>(`${environment.apiUrl}${this.endPoint}`, item);
  // }
  // delete(item: T): Observable<T> {
  //   this.http.delete<T>(`${environment.apiUrl}${this.endPoint}`, item);
  // }
}
