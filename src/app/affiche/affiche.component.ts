import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { core } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { Utilisateur } from '../models/Utilisateur';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {

  utilisateur : Utilisateur[] = []
  constructor(private connectService : ConnectService, private router : Router) { }

  ngOnInit(): void {
    this.getUtilisateurs()
    console.log("this "  ,this.utilisateur)

  }

  
  reloadData() {
    let id = localStorage.getItem('currentutil')!
    let client = this.connectService.Getelement(id).subscribe((response:any) =>  {
      this.utilisateur = response; console.log(response)},(err :HttpErrorResponse)=> {console.log(err)}  
    );
    console.log("utilisateur : ",this.utilisateur)
    let comptes= this.connectService.Getelement(id).subscribe((response:any) =>  {
      this.utilisateur = response},(err :HttpErrorResponse)=> {console.log(err)}  
  );
}


public getUtilisateurs(){ 
  let id = localStorage.getItem('currentutil')!
  this.connectService.Getelement(id).subscribe((response:any) =>  {
    this.utilisateur = response
  },(err :HttpErrorResponse)=> {console.log(err)})
}

}




 
