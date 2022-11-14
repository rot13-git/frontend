import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../object/libro';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}
@Injectable({
  providedIn: 'root'
})


export class LibroService {

  private baseUrl = 'http://localhost:8080/book';

  

  constructor(private httpClient:HttpClient) { }

  getByName(value: string):Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.baseUrl+"/search?nome="+value);
  }

  addLibro(libro:Libro):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/add",libro,httpOptions);
  }
  getAllLibri(): Observable<Libro[]> {
    return this.httpClient.get<Libro[]>(this.baseUrl+"/all");
  }
}
