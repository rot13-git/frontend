import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn=false;

  constructor(public router:Router,
              private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.authService.isUserLoggedIn();
  }

  logout():void{
    this.authService.logout();
  }

}
