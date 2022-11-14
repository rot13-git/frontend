import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth.service';
import { Contenuto } from '../object/contenuto';
import { RequestContenuto } from '../object/request-contenuto';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}

const authReq = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem("token")}`
  })
};

@Injectable({
  providedIn: 'root'
})

export class ContenutoService {
  
  private baseUrl = 'http://localhost:8080/contenuto';

  constructor(private http:HttpClient) { }

  getAllContenuti(pageSize:number,pageIndex:number):Observable<any>{
    return this.http.get<Contenuto[]>(`${this.baseUrl}`+"/search?pageNumber="+pageIndex+"&pageSize="+pageSize);
  }
  getContenuti(pageSize:number,pageIndex:number,tag:string,nomeLibro:string):Observable<any>{
    return this.http.get<Contenuto[]>(this.baseUrl+"/search?pageNumber="+pageIndex+"&pageSize="+pageSize+"&tag="+tag+"&libro="+nomeLibro);
  }
  getContenutiUtente(username:string,pageSize:number,pageIndex:number):Observable<any>{
    return this.http.get<Contenuto[]>(`${this.baseUrl}`+"/search/"+username+"?pageNumber="+pageIndex+"&pageSize="+pageSize);
  }
  deleteContenuto(contenuto: Contenuto):Observable<any>{
    return this.http.post(this.baseUrl+"/delete",contenuto,httpOptions);
  }

  modifyContenuto(contenuto: Contenuto):Observable<any>{
    return this.http.post(this.baseUrl+"/modify",contenuto,httpOptions);
  }

  addContenuto(requestContenuto:RequestContenuto):Observable<any>{
    return this.http.post<Contenuto>(this.baseUrl+"/create",requestContenuto,authReq);
  }
}
