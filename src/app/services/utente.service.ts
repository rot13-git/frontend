import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../object/utente';

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
export class UtenteService {
  
  private baseUrl = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  userDetails(username:string):Observable<any>{
    return this.http.get<Utente>(this.baseUrl+"/name?username="+username);
  }

  registerUser(utente:Utente):Observable<any>{
    return this.http.post<Utente>(this.baseUrl+"/register",utente,httpOptions);
  }
  eliminaAccount() {
    return this.http.delete<any>(this.baseUrl+"/delete");
  }
}
