import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'

import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  

import { Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})

export class GestionService {


  headers: HttpHeaders; 
  
  private accessPointUrl: string = 'http://localhost:59123/api/gestion';

  constructor( private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }

   public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public Put(id : string) {
    let body: string = JSON.stringify(id); 
    return this.http.put(this.accessPointUrl + '/' + id, payload, {headers: this.headers});
  }

  
  public Delete(id: number): Observable < any > {  
    let body: string = JSON.stringify(id);  
    // Sends an authenticated request.    
    return this.http.post(this.accessPointUrl + '/' + id, body, {headers: this.headers})
    
  }  
}

function payload(user: Utilisateur, id:string, payload: any, arg2: { headers: HttpHeaders; }) {
  
}
