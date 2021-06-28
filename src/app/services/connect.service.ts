import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'

import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  
  public redirectUrl: string | undefined;  
  private user: any = {}; 
  private headers: HttpHeaders;
 

  private accessPointUrl: string = 'http://localhost:59123/api/Login';
  authHttp: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.decodeToken();  
   }
  decodeToken() {
    throw new Error('');
  }


  public Getelement(id:string) {
    let body: string = JSON.stringify(id); 

    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

   public getLogin(id:string) {
    let body: string = JSON.stringify(id); 

    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});
  }


  public GetInfos(): Observable < any > {     
    return this.authHttp.get("/api/connect/GetInfos")  
      .map((res: Response) => {  
        return res.json();  
      })  
      .catch((error: any) => {    
        return Observable.throw(error);  
      });  
  }  




    private encodeParams(params: any): string {  
  
      let body: string = "";  
      for (let key in params) {  
          if (body.length) {  
              body += "&";  
          }  
          body += key + "=";  
          body += encodeURIComponent(params[key]);  
      }  

      return body;  
  }  


  private store(body: any): void {  

    // Stores access token in local storage to keep user signed in.  
    localStorage.setItem('id_token', body.access_token);  
    
    // Stores refresh token in local storage.  
    localStorage.setItem('refresh_token', body.refresh_token);  

} 

public signout(): void {  
  
  this.redirectUrl = 'login';  

  this.user = {};  

}  


 



}  


