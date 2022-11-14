import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { Utente } from 'src/app/object/utente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password : string;
  nomeCompleto:string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  invalidRegister= false;
  constructor(private route: ActivatedRoute,
              public router: Router,
              private authService:AuthenticationService,
              private userService:UtenteService) {   }

  ngOnInit() {
  }

  handleRegister(){
   let utente:Utente = new Utente();
   utente.nomeCompleto=this.nomeCompleto;
   utente.password=this.password;
   utente.username=this.username;
   this.userService.registerUser(utente).subscribe((result)=>{
    this.invalidRegister=false;
    this.authService.authenticationService(this.username,this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      console.log("OK");
      this.successMessage = 'Login Successful.';
      window.location.reload();
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
   },()=>{
    this.invalidRegister=true;
   })
  }

  handleLogin(){
    this.authService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      console.log("OK");
      this.successMessage = 'Login Successful.';
      window.location.reload();
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }




}
