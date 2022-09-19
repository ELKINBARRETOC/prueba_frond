import { Injectable } from '@angular/core';

//importar modulo HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiciosApiService {

  private url="https://reqres.in/api";

  constructor(private http: HttpClient) { }


  // Metodo Login
  login(usuario:any){
    
    return this.http.get(this.url+'/login');        
  }
}
