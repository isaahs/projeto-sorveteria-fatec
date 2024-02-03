import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sorvete } from './sorvete';

@Injectable({
  providedIn: 'root'
})
export class SorveteService {

  private baseURL = "http://localhost:8080/api/v1/sorvetes";

  constructor(private httpClient: HttpClient) { }
  
  getSorvetesList(): Observable<Sorvete[]>{
    return this.httpClient.get<Sorvete[]>(`${this.baseURL}`);
  }

  createSorvete(sorvete: Sorvete): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, sorvete);
  }

  getSorveteById(id: number): Observable<Sorvete>{
    return this.httpClient.get<Sorvete>(`${this.baseURL}/${id}`);
  }

  updateSorvete(id: number, sorvete: Sorvete): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, sorvete);
  }

  deleteSorvete(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
