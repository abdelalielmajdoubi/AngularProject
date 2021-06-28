import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheComponent } from './affiche/affiche.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login" , component: LoginComponent},
  {path:"home" , component: HomeComponent},
  {path:"register" , component: RegisterComponent},
  {path:"affiche" , component: AfficheComponent},
  {path :"", redirectTo : "login" , pathMatch: "full" }
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
