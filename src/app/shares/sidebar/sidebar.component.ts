import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';
import { Utente } from 'src/app/object/utente';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public username:string;
  public utente:Utente;
  constructor(private authService:AuthenticationService,
              public router: Router,
              private userService:UtenteService) { }

  ngOnInit(): void {
    
    this.username = this.authService.getLoggedInUserName();
    this.userService.userDetails(this.username).subscribe(data => this.utente=data);
  }

}
