import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseURL = "http://localhost:8080/api/v1/fornecedores";

  constructor(private httpClient: HttpClient) { }
  
  getFornecedoresList(): Observable<Fornecedor[]>{
    return this.httpClient.get<Fornecedor[]>(`${this.baseURL}`);
  }

  createFornecedor(fornecedor: Fornecedor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fornecedor);
  }

  getFornecedorById(id: number): Observable<Fornecedor>{
    return this.httpClient.get<Fornecedor>(`${this.baseURL}/${id}`);
  }

  updateFornecedor(id: number, fornecedor: Fornecedor): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, fornecedor);
  }

  deleteFornecedor(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
