import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers: HttpHeaders;

  private accessPointUrl: string = 'http://localhost:59123/api/register';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }
//classs !
   public post(model: Utilisateur): Observable < any > {
    
    let body: string = JSON.stringify(model); 
    return this.http.post(this.accessPointUrl , body, {headers: this.headers});  
  }

}